import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { buttonVariants, buttonSizes } from './buttonConfig';
import styles from './Button.module.css';

/**
 * Button Component
 *
 * A token-driven button component with strict 1:1 Figma fidelity.
 * All styling values are derived from design tokens - zero hard-coded values.
 *
 * @example
 * ```tsx
 * // Filled primary button
 * <Button variant="filled">Click me</Button>
 *
 * // Outlined button with icon
 * <Button variant="outlined" iconLeft={<Icon />}>
 *   Save
 * </Button>
 *
 * // Ghost button (minimal style)
 * <Button variant="ghost">Cancel</Button>
 *
 * // Icon-only button (requires aria-label)
 * <Button iconOnly iconLeft={<CloseIcon />} aria-label="Close" />
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      disabled = false,
      loading = false,
      iconLeft,
      iconRight,
      iconOnly = false,
      fullWidth = false,
      children,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Validate iconOnly requires aria-label for accessibility
    if (iconOnly && !ariaLabel && process.env.NODE_ENV !== 'production') {
      console.warn(
        'Button: iconOnly mode requires aria-label for accessibility. ' +
        'Screen readers need a label to announce the button purpose.'
      );
    }

    // Get token-based configuration for this variant and size
    const variantConfig = buttonVariants[variant];
    const sizeConfig = buttonSizes.medium;

    // Build CSS class names
    const buttonClasses = [
      styles.button,
      styles[`button--${variant}`],
      fullWidth && styles['button--fullWidth'],
      (iconLeft || iconRight) && styles['button--withIcon'],
      iconOnly && styles['button--iconOnly'],
      loading && styles['button--loading'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Pass token values as CSS custom properties
    // This allows the CSS to reference these values dynamically
    const buttonStyles = {
      '--btn-bg': variantConfig.background,
      '--btn-fg': variantConfig.foreground,
      '--btn-border': variantConfig.border,
      '--btn-border-width': variantConfig.borderWidth,
      '--btn-padding-x': sizeConfig.paddingX,
      '--btn-padding-y': sizeConfig.paddingY,
      '--btn-font-size': sizeConfig.fontSize,
      '--btn-font-weight': sizeConfig.fontWeight,
      '--btn-border-radius': sizeConfig.borderRadius,
      '--btn-gap': sizeConfig.gap,
      '--btn-min-height': sizeConfig.minHeight,
      '--btn-hover': variantConfig.hover,
      '--btn-pressed': variantConfig.pressed,
    } as React.CSSProperties;

    return (
      <button
        ref={ref}
        className={buttonClasses}
        style={buttonStyles}
        disabled={disabled || loading}
        aria-label={iconOnly ? ariaLabel : undefined}
        aria-busy={loading}
        {...props}
      >
        {/* State layer overlay for hover/pressed interactions */}
        <span className={styles.stateLayer} aria-hidden="true" />

        {/* Icon left (when not icon-only mode) */}
        {iconLeft && !iconOnly && (
          <span className={styles.icon} aria-hidden="true">
            {iconLeft}
          </span>
        )}

        {/* Icon only mode */}
        {iconOnly && iconLeft && (
          <span className={styles.icon} aria-hidden="true">
            {iconLeft}
          </span>
        )}

        {/* Text label */}
        {!iconOnly && children && (
          <span className={styles.label}>{children}</span>
        )}

        {/* Icon right */}
        {iconRight && !iconOnly && (
          <span className={styles.icon} aria-hidden="true">
            {iconRight}
          </span>
        )}

        {/* Loading spinner (when loading state is active) */}
        {loading && (
          <span className={styles.spinner} aria-label="Loading" role="status">
            {/* Simple loading indicator - replace with design system spinner later */}
            <span className={styles.spinnerCircle} />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
