# Design System Components

Token-driven React component library with 1:1 Figma fidelity and zero hard-coded values.

## Architecture

This design system follows a **strict token-driven architecture** where:

- ✅ **Zero hard-coded values** - Every visual property comes from design tokens
- ✅ **1:1 Figma fidelity** - Pixel-perfect match with Figma designs
- ✅ **Token hierarchy** - Raw → Semantic → Component tokens
- ✅ **Type safety** - TypeScript prevents invalid token references
- ✅ **Accessibility** - WCAG 2.1 AA compliant

### Token System

```
Raw Tokens (raw.tokens.json)
    ↓ (references)
Semantic Tokens (semantic.tokens.json)
    ↓ (references)
Component Tokens (button.json, etc.)
    ↓ (consumed by)
React Components
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Build design tokens (generates CSS variables)
npm run build:tokens

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Using Components

```tsx
import { Button } from '@dsystem/components';
import '@dsystem/components/tokens.css';

function App() {
  return (
    <div>
      <Button variant="filled">Primary Button</Button>
      <Button variant="outlined">Secondary Button</Button>
      <Button variant="ghost">Tertiary Button</Button>
    </div>
  );
}
```

## Components

### Button

Token-driven button component with three variants and comprehensive state management.

**Variants:**
- `filled` - Solid background (primary style)
- `outlined` - Border with transparent background
- `ghost` - Minimal style with no border/background

**States:**
- Default, Hover, Pressed, Disabled, Loading, Focus

**Features:**
- Icon support (left, right, icon-only)
- Full-width mode
- Loading spinner
- Accessible by default (WCAG 2.1 AA)

```tsx
// Basic usage
<Button variant="filled">Click me</Button>

// With icons
<Button variant="outlined" iconLeft={<Icon />}>
  Save
</Button>

// Icon-only (requires aria-label)
<Button iconOnly iconLeft={<CloseIcon />} aria-label="Close" />

// Loading state
<Button loading>Saving...</Button>

// Full width
<Button fullWidth>Submit Form</Button>
```

## Development

### Project Structure

```
dsystem/
├── tokens/                    Design token JSON files
│   ├── button.json
│   ├── stateLayer.tokens.json
│   ├── semantic.tokens.json
│   ├── raw.tokens.json
│   ├── padding&Radi.json
│   └── typography.tokens.json
│
├── src/
│   ├── tokens/               Generated tokens
│   │   ├── buildTokens.ts    Token build script
│   │   ├── tokens.css        CSS custom properties (generated)
│   │   └── tokens.ts         TypeScript types (generated)
│   │
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.types.ts
│   │       ├── Button.module.css
│   │       ├── buttonConfig.ts
│   │       ├── Button.stories.tsx
│   │       └── Button.test.tsx
│   │
│   └── index.ts             Main exports
│
└── .storybook/              Storybook configuration
```

### Token Processing

Design tokens are stored as JSON files and processed into CSS custom properties:

```bash
# Rebuild tokens after updating JSON files
npm run build:tokens
```

This generates:
- `src/tokens/tokens.css` - CSS custom properties
- `src/tokens/tokens.ts` - TypeScript type definitions

### Testing

```bash
# Run unit tests
npm test

# Run tests with UI
npm run test:ui

# Type checking
npm run type-check
```

### Building

```bash
# Build library for production
npm run build

# Build Storybook
npm run build-storybook
```

## Token Guidelines

### No Hard-Coded Values

All visual properties MUST reference design tokens:

```tsx
// ❌ BAD - hard-coded values
const styles = {
  padding: '16px',
  borderRadius: '6px',
  color: '#000000',
};

// ✅ GOOD - token references
const styles = {
  padding: 'var(--padding-padding-7)',
  borderRadius: 'var(--radi-4)',
  color: 'var(--button-foreground-inversePrimary)',
};
```

### Token Naming Convention

Tokens follow a hierarchical naming structure:

```
--{category}-{subcategory}-{variant}-{state}

Examples:
--button-background-primary
--button-foreground-disabled
--state-layer-onLight-hover
--padding-padding-7
--radi-4
```

### Adding New Tokens

1. Update the appropriate JSON file in the `tokens/` directory
2. Run `npm run build:tokens` to regenerate CSS variables
3. Reference the new token in your components

## Figma Integration

Components are designed to match Figma designs with 1:1 fidelity:

1. Export design tokens from Figma (variables JSON)
2. Place token files in project root
3. Run `npm run build:tokens` to process tokens
4. Implement components using generated CSS variables
5. Validate against Figma in Storybook

### Figma Dev Mode

When implementing components, use Figma Dev Mode to extract:
- Exact spacing values (which padding tokens)
- Border radius values (which radi tokens)
- Typography specifications (fontSize, fontWeight)
- Color token references
- Component variants and properties

## Contributing

### Component Checklist

When creating new components:

- [ ] Create TypeScript types (`.types.ts`)
- [ ] Implement component (`.tsx`)
- [ ] Create config file with token mappings (`.config.ts`)
- [ ] Add styles with CSS Modules (`.module.css`)
- [ ] Write Storybook stories (`.stories.tsx`)
- [ ] Write unit tests (`.test.tsx`)
- [ ] Validate against Figma design
- [ ] Document component in README

### Code Standards

- Use TypeScript strict mode
- No hard-coded values (enforced by ESLint)
- All components must be accessible (WCAG 2.1 AA)
- 100% test coverage for components
- Document all props with JSDoc
- Follow existing file/folder structure

## Support

For questions or issues, see:
- [Implementation Plan](/Users/soheil/.claude/plans/swift-brewing-starlight.md)
- [Storybook Documentation](http://localhost:6006)

## License

Private - Internal use only
