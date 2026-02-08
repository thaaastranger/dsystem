import React from 'react';
import { PanelProps } from './Panel.types';
import styles from './Panel.module.css';

/**
 * Panel Component
 * Application layout with sidebar navigation and main content area
 * Based on Figma design node-id=4-500
 */

// Icon components
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="3" r="1" fill="currentColor" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <circle cx="8" cy="13" r="1" fill="currentColor" />
  </svg>
);

export const Panel: React.FC<PanelProps> = ({
  title = 'Northway Fleet Operations Platform',
  breadcrumb = ['Components', 'Button'],
  tabs = [
    { label: 'Overview', active: true },
    { label: 'Usage', active: false },
    { label: 'Code', active: false },
    { label: 'Changelog', active: false },
  ],
  sidebarItems = [
    { label: 'Status', icon: '📊' },
    { label: 'Foundation', icon: '📚' },
    { label: 'Components', icon: '🔧' },
    { label: 'Members', icon: '👥' },
    { label: 'Settings', icon: '⚙️' },
  ],
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.panel} ${className || ''}`} {...props}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        {/* User Profile */}
        <div className={styles.sidebarHeader}>
          <div className={styles.avatar}>S</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Sorabbani</p>
            <p className={styles.userDomain}>sorabbani.com</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.sidebarNav}>
          {sidebarItems.map((item, index) => (
            <a key={index} href="#" className={styles.navItem}>
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <div className={styles.helpSection}>
            <span className={styles.helpIcon}>📞</span>
            <span className={styles.helpText}>Help & Feedback</span>
          </div>
          <button className={styles.collapseButton} aria-label="Collapse sidebar">
            <span>←</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <span className={index === breadcrumb.length - 1 ? styles.breadcrumbInactive : styles.breadcrumbActive}>
                {item}
              </span>
              {index < breadcrumb.length - 1 && (
                <span className={styles.breadcrumbSeparator}>
                  <ChevronRightIcon />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <button className={styles.menuButton} aria-label="More options">
            <MenuIcon />
          </button>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={tab.active ? styles.tabActive : styles.tab}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};
