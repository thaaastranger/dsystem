import React from 'react';
import { PanelProps } from './Panel.types';
import {
  ChevronRight,
  MoreVertical,
  Activity,
  BookOpen,
  Box,
  Users,
  Settings,
  Phone,
  ChevronLeft
} from 'lucide-react';
import styles from './Panel.module.css';

/**
 * Panel Component
 * Application layout with sidebar navigation and main content area
 * Based on Figma design node-id=4-500
 */

export const Panel: React.FC<PanelProps> = ({
  title = 'Northway Fleet Operations Platform',
  breadcrumb = ['Components', 'Button'],
  onBreadcrumbClick,
  tabs = [
    { label: 'Overview', active: true },
    { label: 'Usage', active: false },
    { label: 'Code', active: false },
    { label: 'Specs', active: false },
    { label: 'Changelog', active: false },
  ],
  sidebarItems = [
    { label: 'Status', icon: <Activity size={20} /> },
    { label: 'Foundation', icon: <BookOpen size={20} /> },
    { label: 'Components', icon: <Box size={20} />, active: false },
    { label: 'Members', icon: <Users size={20} /> },
    { label: 'Settings', icon: <Settings size={20} /> },
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
            <button
              key={index}
              className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}
              onClick={item.onClick}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <div className={styles.helpSection}>
            <span className={styles.helpIcon}>
              <Phone size={16} />
            </span>
            <span className={styles.helpText}>Help & Feedback</span>
          </div>
          <button className={styles.collapseButton} aria-label="Collapse sidebar">
            <ChevronLeft size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              {index === breadcrumb.length - 1 ? (
                <span className={styles.breadcrumbInactive}>
                  {item}
                </span>
              ) : (
                <button
                  className={styles.breadcrumbActive}
                  onClick={() => onBreadcrumbClick?.(index, item)}
                >
                  {item}
                </button>
              )}
              {index < breadcrumb.length - 1 && (
                <span className={styles.breadcrumbSeparator}>
                  <ChevronRight size={16} />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <button className={styles.menuButton} aria-label="More options">
            <MoreVertical size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={tab.active ? styles.tabActive : styles.tab}
              onClick={tab.onClick}
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
