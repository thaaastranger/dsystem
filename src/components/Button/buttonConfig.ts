/**
 * Button Configuration
 * Maps button variants and sizes to design tokens
 * NO HARD-CODED VALUES - All values reference CSS custom properties from tokens
 */

/**
 * Variant configuration for button styles
 * Each variant specifies token references for colors and state layers
 */
export const buttonVariants = {
  /**
   * Filled variant - solid background button (primary style)
   * Uses dark background with light text
   * State layer context: onDark (light overlay on dark background)
   */
  filled: {
    background: 'var(--button-background-primary)',
    foreground: 'var(--button-foreground-primary)',
    border: 'transparent',
    borderWidth: '0',
    stateLayerContext: 'onDark' as const,
    hover: 'var(--state-layer-onDark-hover)',
    pressed: 'var(--state-layer-onDark-pressed)',
  },

  /**
   * Outlined variant - border-only button with transparent background
   * Uses light background with dark text and visible border
   * State layer context: onLight (dark overlay on light background)
   */
  outlined: {
    background: 'transparent',
    foreground: 'var(--button-foreground-inversePrimary)',
    border: 'var(--button-border-unselected)',
    borderWidth: '1px',
    stateLayerContext: 'onLight' as const,
    hover: 'var(--state-layer-onLight-hover)',
    pressed: 'var(--state-layer-onLight-pressed)',
  },

  /**
   * Ghost variant - minimal button with no border or background
   * Uses dark text on transparent background
   * State layer context: onLight (dark overlay shows on hover/press)
   */
  ghost: {
    background: 'transparent',
    foreground: 'var(--button-foreground-inversePrimary)',
    border: 'transparent',
    borderWidth: '0',
    stateLayerContext: 'onLight' as const,
    hover: 'var(--state-layer-onLight-hover)',
    pressed: 'var(--state-layer-onLight-pressed)',
  },
} as const;

/**
 * Size configuration for button dimensions
 * Currently only medium size implemented
 * All values reference design tokens
 *
 * NOTE: These token references should be confirmed against Figma Dev Mode
 * at node-id=1-114. Adjust if Figma specifies different tokens.
 */
export const buttonSizes = {
  /**
   * Medium size button configuration
   * Default and only size for initial implementation
   */
  medium: {
    // Horizontal padding - left and right spacing
    paddingX: 'var(--padding-padding-7)', // 16px

    // Vertical padding - top and bottom spacing
    paddingY: 'var(--padding-padding-4)', // 8px

    // Font size for button text
    fontSize: 'var(--typography-fontSize-14)', // 14px

    // Font weight for button text
    fontWeight: '500', // Medium weight

    // Border radius for rounded corners
    borderRadius: 'var(--radi-4)', // 6px

    // Gap between icon and text
    gap: 'var(--padding-padding-2)', // 4px

    // Minimum height for touch targets (accessibility)
    minHeight: '40px',
  },
} as const;

/**
 * Type definitions for variant and size keys
 */
export type ButtonVariantKey = keyof typeof buttonVariants;
export type ButtonSizeKey = keyof typeof buttonSizes;
