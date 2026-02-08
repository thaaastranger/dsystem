import { ReactNode, HTMLAttributes } from 'react';

/**
 * Sidebar navigation item
 */
export interface SidebarItem {
  label: string;
  icon: ReactNode;
  href?: string;
}

/**
 * Tab configuration
 */
export interface Tab {
  label: string;
  active: boolean;
  href?: string;
  onClick?: () => void;
}

/**
 * Panel component props
 * Application layout with sidebar and main content area
 */
export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Page title displayed in header
   */
  title?: string;

  /**
   * Breadcrumb navigation items
   */
  breadcrumb?: string[];

  /**
   * Tab navigation items
   */
  tabs?: Tab[];

  /**
   * Sidebar navigation items
   */
  sidebarItems?: SidebarItem[];

  /**
   * Main content
   */
  children?: ReactNode;
}
