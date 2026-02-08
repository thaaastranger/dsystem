import { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Input component props
 * Text input field with label, helper text, and icon support
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label text displayed above input
   */
  label?: string;

  /**
   * Helper text displayed below input
   */
  helperText?: string;

  /**
   * Icon displayed on the left side of input
   */
  leadingIcon?: ReactNode;

  /**
   * Icon displayed on the right side of input
   */
  trailingIcon?: ReactNode;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;
}
