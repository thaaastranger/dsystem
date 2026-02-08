import { ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Button visual variants matching Figma design
 */
export type ButtonVariant = 'filled' | 'outlined' | 'ghost';

/**
 * Button interaction states
 */
export type ButtonState = 'default' | 'hovered' | 'pressed' | 'disabled';

/**
 * Button component props
 * All styling derives from design tokens - zero hard-coded values
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button
   * - filled: Solid background (primary style)
   * - outlined: Border with transparent background
   * - ghost: No border, no background (text only)
   * @default 'filled'
   */
  variant?: ButtonVariant;

  /**
   * Disabled state - prevents interaction
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state - shows spinner and prevents interaction
   * @default false
   */
  loading?: boolean;

  /**
   * Icon positioned to the left of text label
   */
  iconLeft?: ReactNode;

  /**
   * Icon positioned to the right of text label
   */
  iconRight?: ReactNode;

  /**
   * Icon-only mode (no text label shown)
   * Requires aria-label for accessibility
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Make button full width of container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Button text content (label)
   */
  children?: ReactNode;

  /**
   * ARIA label for accessibility
   * Required when iconOnly is true
   */
  'aria-label'?: string;
}
