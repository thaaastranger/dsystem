import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Token file paths (relative to project root)
const TOKEN_DIR = path.resolve(__dirname, '../../');
const OUTPUT_DIR = path.resolve(__dirname);

interface TokenValue {
  $type: string;
  $value: any;
  $extensions?: {
    'com.figma.variableId'?: string;
    'com.figma.aliasData'?: {
      targetVariableName: string;
      targetVariableId: string;
    };
  };
}

interface TokenCollection {
  [key: string]: TokenValue | TokenCollection;
}

/**
 * Reads and parses a JSON token file
 */
function readTokenFile(filename: string): TokenCollection {
  const filePath = path.join(TOKEN_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Extracts hex value from color token
 */
function getColorValue(token: TokenValue): string {
  if (token.$value && typeof token.$value === 'object' && 'hex' in token.$value) {
    // Handle RGBA with alpha
    if ('alpha' in token.$value && token.$value.alpha !== 1) {
      const hex = token.$value.hex;
      const alpha = token.$value.alpha;
      // Convert hex to rgba
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return token.$value.hex;
  }
  return token.$value;
}

/**
 * Recursively process tokens and generate CSS variable name and value pairs
 */
function processTokens(
  tokens: TokenCollection,
  prefix: string = '',
  result: Map<string, string> = new Map()
): Map<string, string> {
  for (const [key, value] of Object.entries(tokens)) {
    // Skip metadata keys
    if (key.startsWith('$')) continue;

    const cssVarName = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object') {
      // Check if this is a token with $value
      if ('$type' in value && '$value' in value) {
        const token = value as TokenValue;
        let cssValue: string;

        switch (token.$type) {
          case 'color':
            cssValue = getColorValue(token);
            break;
          case 'number':
            cssValue = `${token.$value}px`;
            break;
          case 'string':
            cssValue = token.$value;
            break;
          default:
            cssValue = String(token.$value);
        }

        result.set(cssVarName, cssValue);
      } else {
        // Recurse into nested object
        processTokens(value as TokenCollection, cssVarName, result);
      }
    }
  }

  return result;
}

/**
 * Generate CSS custom properties from token map
 */
function generateCSS(tokenMap: Map<string, string>): string {
  let css = '/* Auto-generated from design tokens - DO NOT EDIT MANUALLY */\n\n';
  css += ':root {\n';

  // Sort by key for consistent output
  const sortedEntries = Array.from(tokenMap.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [name, value] of sortedEntries) {
    css += `  --${name}: ${value};\n`;
  }

  css += '}\n';
  return css;
}

/**
 * Generate TypeScript token definitions
 */
function generateTypeScript(tokenMap: Map<string, string>): string {
  let ts = '/* Auto-generated from design tokens - DO NOT EDIT MANUALLY */\n\n';
  ts += 'export const tokens = {\n';

  // Group by prefix for better structure
  const grouped = new Map<string, Map<string, string>>();

  for (const [name, value] of tokenMap.entries()) {
    const parts = name.split('-');
    const group = parts[0];

    if (!grouped.has(group)) {
      grouped.set(group, new Map());
    }

    grouped.get(group)!.set(name, value);
  }

  for (const [group, entries] of grouped.entries()) {
    ts += `  ${group}: {\n`;
    for (const [name] of entries) {
      const varName = name.substring(group.length + 1); // Remove group prefix
      if (varName) {
        const jsKey = varName.replace(/-/g, '_');
        ts += `    ${jsKey}: 'var(--${name})',\n`;
      }
    }
    ts += `  },\n`;
  }

  ts += '} as const;\n\n';
  ts += 'export type TokenPath = keyof typeof tokens;\n';

  return ts;
}

/**
 * Main build function
 */
function buildTokens() {
  console.log('🎨 Building design tokens...\n');

  try {
    // Read all token files
    console.log('📖 Reading token files...');
    const buttonTokens = readTokenFile('button.json');
    const stateLayerTokens = readTokenFile('stateLayer.tokens.json');
    const paddingRadiTokens = readTokenFile('padding&Radi.json');
    const typographyTokens = readTokenFile('typography.tokens.json');
    const semanticTokens = readTokenFile('semantic.tokens.json');
    const rawTokens = readTokenFile('raw.tokens.json');

    // Process all tokens
    console.log('⚙️  Processing tokens...');
    const allTokens = new Map<string, string>();

    processTokens(buttonTokens, 'button', allTokens);
    processTokens(stateLayerTokens, 'state-layer', allTokens);
    processTokens(paddingRadiTokens.padding || {}, 'padding', allTokens);
    processTokens(paddingRadiTokens.radi || {}, 'radi', allTokens);
    processTokens(typographyTokens, 'typography', allTokens);

    // Process semantic colors (nested structure)
    for (const colorFamily of ['grey', 'blue', 'green', 'red', 'yellow']) {
      if (semanticTokens[colorFamily]) {
        processTokens(
          semanticTokens[colorFamily] as TokenCollection,
          `semantic-${colorFamily}`,
          allTokens
        );
      }
    }

    // Process raw colors
    for (const colorFamily of ['grey', 'blue', 'green', 'red', 'yellow']) {
      if (rawTokens[colorFamily]) {
        processTokens(
          rawTokens[colorFamily] as TokenCollection,
          `raw-${colorFamily}`,
          allTokens
        );
      }
    }

    console.log(`✅ Processed ${allTokens.size} tokens\n`);

    // Generate CSS file
    console.log('📝 Generating tokens.css...');
    const cssContent = generateCSS(allTokens);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'tokens.css'), cssContent, 'utf-8');
    console.log('✅ tokens.css created\n');

    // Generate TypeScript file
    console.log('📝 Generating tokens.ts...');
    const tsContent = generateTypeScript(allTokens);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'tokens.ts'), tsContent, 'utf-8');
    console.log('✅ tokens.ts created\n');

    console.log('🎉 Token build complete!\n');
  } catch (error) {
    console.error('❌ Error building tokens:', error);
    process.exit(1);
  }
}

// Run the build
buildTokens();
