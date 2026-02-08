# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Build Design Tokens

This generates CSS custom properties from your token JSON files:

```bash
npm run build:tokens
```

### 3. Start the Demo App

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

You'll see a test environment with:
- ✨ All button variants (filled, outlined, ghost)
- ✨ All button states (default, hover, pressed, disabled, loading)
- ✨ Icons and icon-only buttons
- ✨ Full-width buttons
- ✨ Interactive demos

---

## Alternative: View in Storybook

For component documentation:

```bash
npm run storybook
```

Opens at http://localhost:6006

---

## What You'll See

### 📦 Panel Component
A token-driven container component that groups related content:
- Three variants: default, elevated (with shadow), outlined (with border)
- Configurable title and description
- Flexible width

### 🎨 Button Component
Token-driven buttons with 1:1 Figma fidelity:
- **3 variants**: filled, outlined, ghost
- **6 states**: default, hover, pressed, disabled, loading, focus
- **Icon support**: left, right, both, icon-only
- **Features**: full-width, loading spinner, accessibility

### 🧪 Test Environment
Interactive demo panels showcasing:
1. **Button Variants** - Visual comparison of all three styles
2. **Button States** - All interactive states
3. **Buttons with Icons** - Icon positioning examples
4. **Full Width Buttons** - Container-width buttons
5. **Interactive Demo** - Live counter and async operations

---

## Project Structure

```
dsystem/
├── src/
│   ├── components/
│   │   ├── Button/          Button component
│   │   └── Panel/           Panel component (NEW)
│   │
│   ├── tokens/
│   │   ├── buildTokens.ts   Token processing
│   │   ├── tokens.css       Generated CSS vars
│   │   └── tokens.ts        Generated TypeScript types
│   │
│   ├── App.tsx              Demo application (NEW)
│   ├── App.css              Demo styles (NEW)
│   ├── main.tsx             Entry point (NEW)
│   ├── index.css            Global styles (NEW)
│   └── index.ts             Library exports
│
├── index.html               HTML entry (NEW)
└── package.json             Dependencies
```

---

## Customizing the Panel

The demo app in [src/App.tsx](./src/App.tsx) can be customized to match your Figma design.

### Current Panel Structure

```tsx
<Panel
  title="Panel Title"
  description="Panel description text"
  variant="elevated"  // or "outlined" or "default"
>
  {/* Panel content */}
</Panel>
```

### Panel Variants

- **`default`** - Basic panel with background
- **`elevated`** - Panel with drop shadow
- **`outlined`** - Panel with border

### Matching Figma Design

To implement your Figma panel (node-id=4-500):

1. **Extract Specifications from Figma Dev Mode:**
   - Panel dimensions (width, height)
   - Padding values (use padding tokens)
   - Border radius (use radi tokens)
   - Background color (use semantic tokens)
   - Shadow specs (if elevated)
   - Content layout and spacing

2. **Update Panel Component:**
   - Edit [src/components/Panel/Panel.module.css](./src/components/Panel/Panel.module.css)
   - Update token references to match Figma
   - Adjust layout properties

3. **Update App Content:**
   - Edit [src/App.tsx](./src/App.tsx)
   - Customize panel content
   - Match Figma layout and structure

---

## Token System

All styling uses CSS custom properties from design tokens:

```css
/* Colors */
--button-background-primary
--semantic-grey-foreground-primary

/* Spacing */
--padding-padding-7  /* 16px */
--padding-padding-9  /* 24px */

/* Border Radius */
--radi-4  /* 6px */
--radi-6  /* 12px */

/* Typography */
--typography-fontSize-14
--typography-fontFamily-inter
```

### Updating Tokens

1. Edit JSON files in project root (e.g., `button.json`, `padding&Radi.json`)
2. Run `npm run build:tokens`
3. Restart dev server (`npm run dev`)
4. Changes apply automatically to all components

---

## Common Commands

```bash
# Development
npm run dev              # Start demo app
npm run storybook        # Start Storybook

# Building
npm run build            # Build library
npm run build:tokens     # Rebuild tokens

# Testing
npm test                 # Run tests
npm run lint             # Run linter
npm run type-check       # TypeScript check
```

---

## Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Tokens not showing
```bash
npm run build:tokens
```

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Styles not applying
1. Check that `tokens.css` exists in `src/tokens/`
2. Verify `import './tokens/tokens.css'` in `App.tsx`
3. Check browser console for errors

---

## Next Steps

1. ✅ View demo app: `npm run dev`
2. 🎨 Customize panels to match Figma design
3. 📊 Extract exact token values from Figma Dev Mode
4. 🧩 Add more components to the design system
5. 📖 Update documentation

---

## Support

- See [README.md](./README.md) for full documentation
- See [SETUP.md](./SETUP.md) for detailed setup guide
- See [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for implementation details
- Run `npm run storybook` for component documentation
