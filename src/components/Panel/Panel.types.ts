import { ReactNode, HTMLAttributes } from 'react';

/**
 * Panel component props
 */
export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Panel title
   */
  title?: string;

  /**
   * Panel description/subtitle
   */
  description?: string;

  /**
   * Panel content
   */
  children?: ReactNode;

  /**
   * Panel width
   */
  width?: string;

  /**
   * Panel background variant
   */
  variant?: 'default' | 'elevated' | 'outlined';
}
