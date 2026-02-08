# Setup Guide

Quick start guide for setting up and running the design system.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- React & React DOM
- TypeScript
- Vite (build tool)
- Vitest (testing)
- Storybook (documentation)
- Testing Library

### 2. Build Design Tokens

Generate CSS custom properties from JSON token files:

```bash
npm run build:tokens
```

This processes the token JSON files and generates:
- `src/tokens/tokens.css` - CSS custom properties
- `src/tokens/tokens.ts` - TypeScript type definitions

**Important**: Run this command whenever you update token JSON files.

### 3. Start Development

Choose one of the following:

#### Option A: Vite Dev Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

#### Option B: Storybook (Recommended)
```bash
npm run storybook
```
Opens at `http://localhost:6006`

Storybook provides:
- Interactive component playground
- All variants and states
- Auto-generated documentation
- Visual testing

## Verification

### Check Token Generation

After running `npm run build:tokens`, verify:

```bash
# Check that tokens.css was generated
ls -la src/tokens/tokens.css

# View token CSS variables (first 50 lines)
head -50 src/tokens/tokens.css
```

You should see CSS custom properties like:
```css
:root {
  --button-background-disabled: #DBDBDB;
  --button-background-primary: #000000;
  --button-background-secondary: #4D4D4D;
  ...
}
```

### Run Tests

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui
```

All tests should pass. Expected output:
```
✓ src/components/Button/Button.test.tsx (XX tests)
```

### View Components in Storybook

1. Run `npm run storybook`
2. Navigate to "Components / Button"
3. Interact with all variants:
   - Filled, Outlined, Ghost
   - Default, Hover, Pressed, Disabled, Loading
   - With icons, Full width, etc.

## Project Structure

```
dsystem/
├── tokens/                     # Design token JSON files (DO NOT EDIT tokens.css)
│   ├── button.json
│   ├── semantic.tokens.json
│   ├── raw.tokens.json
│   └── ...
│
├── src/
│   ├── tokens/
│   │   ├── buildTokens.ts     # Token processing script
│   │   ├── tokens.css         # ⚠️  GENERATED - do not edit
│   │   └── tokens.ts          # ⚠️  GENERATED - do not edit
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
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Common Commands

```bash
# Development
npm run dev              # Start Vite dev server
npm run storybook        # Start Storybook

# Building
npm run build            # Build library for production
npm run build:tokens     # Rebuild design tokens
npm run build-storybook  # Build Storybook static site

# Testing
npm test                 # Run unit tests
npm run test:ui          # Run tests with UI
npm run type-check       # TypeScript type checking

# Linting
npm run lint             # Run ESLint
```

## Workflow

### Updating Tokens

1. Edit token JSON files in project root (e.g., `button.json`)
2. Run `npm run build:tokens`
3. Verify changes in `src/tokens/tokens.css`
4. Components automatically use updated tokens

### Creating Components

1. Create component directory: `src/components/NewComponent/`
2. Create files:
   - `NewComponent.types.ts` - TypeScript interfaces
   - `NewComponent.tsx` - Component implementation
   - `NewComponent.module.css` - Styles (CSS Modules)
   - `newComponentConfig.ts` - Token mappings
   - `NewComponent.stories.tsx` - Storybook stories
   - `NewComponent.test.tsx` - Unit tests
3. Export from `src/index.ts`
4. Document in README.md

### Figma Integration Workflow

When implementing from Figma:

1. **Extract Specifications**
   - Open Figma Dev Mode at the target node
   - Note exact spacing (padding tokens)
   - Note border radius (radi tokens)
   - Note typography (fontSize, fontWeight tokens)
   - Note colors (semantic color references)

2. **Update Token Config**
   - Update `componentConfig.ts` with correct token references
   - Example: Change `paddingX: 'var(--padding-padding-7)'` to correct value

3. **Validate Fidelity**
   - Compare Storybook render with Figma screenshot
   - Check all variants and states
   - Verify pixel-perfect match

## Troubleshooting

### Tokens not updating

```bash
# Force rebuild tokens
rm -rf src/tokens/*.css src/tokens/*.ts
npm run build:tokens
```

### Type errors

```bash
# Check for TypeScript errors
npm run type-check

# Rebuild if token types are stale
npm run build:tokens
```

### Tests failing

```bash
# Clear test cache
npm test -- --clearCache

# Run specific test file
npm test -- Button.test.tsx
```

### Storybook not showing components

1. Check that token CSS is imported in `.storybook/preview.ts`
2. Verify component stories export a default meta object
3. Check browser console for errors

## Missing Figma Specifications

⚠️  **IMPORTANT**: The following values need confirmation from Figma Dev Mode (node-id=1-114):

### Medium Button Size
- [ ] Horizontal padding: `padding-7` (16px) or different?
- [ ] Vertical padding: `padding-4` (8px) or different?
- [ ] Border radius: `radi-4` (6px) or different?
- [ ] Font size: `fontSize.14` (14px) or different?
- [ ] Font weight: 500 or different?
- [ ] Icon-text gap: `padding-2` (4px) or different?
- [ ] Minimum height: 40px or different?

### Outlined Variant
- [ ] Border width: 1px or different?
- [ ] Border color: `button.border.unselected` or `button.border.selected`?

### To Update
Edit `src/components/Button/buttonConfig.ts` with correct token references after confirming with Figma.

## Next Steps

1. ✅ Review Button component in Storybook
2. ⚠️  Confirm token mappings against Figma (see above)
3. ⚠️  Update `buttonConfig.ts` if needed
4. ✅ Run tests to verify functionality
5. 🚀 Start building next component

## Support

- See [README.md](./README.md) for component documentation
- See [Implementation Plan](/Users/soheil/.claude/plans/swift-brewing-starlight.md) for architecture details
- Run `npm run storybook` for interactive documentation
