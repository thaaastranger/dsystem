import React, { forwardRef } from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

/**
 * Input Component
 * Token-driven text input field with label, helper text, and icon support
 * Based on Figma design node-id=1-224
 */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      leadingIcon,
      trailingIcon,
      error = false,
      errorMessage,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const containerClass = `${styles.container} ${className || ''}`;
    const inputClass = `${styles.input} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`;

    return (
      <div className={containerClass}>
        {/* Label */}
        {label && (
          <label className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}>
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className={styles.inputContainer}>
          {/* Leading Icon */}
          {leadingIcon && (
            <span className={styles.leadingIcon}>
              {leadingIcon}
            </span>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            className={inputClass}
            disabled={disabled}
            {...props}
          />

          {/* Trailing Icon */}
          {trailingIcon && (
            <span className={styles.trailingIcon}>
              {trailingIcon}
            </span>
          )}
        </div>

        {/* Helper Text or Error Message */}
        {(helperText || errorMessage) && (
          <p className={`${styles.helperText} ${error ? styles.helperError : ''} ${disabled ? styles.helperDisabled : ''}`}>
            {error && errorMessage ? errorMessage : helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
