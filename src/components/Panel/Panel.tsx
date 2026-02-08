import React from 'react';
import { PanelProps } from './Panel.types';
import styles from './Panel.module.css';

/**
 * Panel Component
 * A container component for grouping related content
 */
export const Panel: React.FC<PanelProps> = ({
  title,
  description,
  children,
  width,
  variant = 'default',
  className,
  style,
  ...props
}) => {
  const panelClasses = [
    styles.panel,
    styles[`panel--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const panelStyles = {
    ...style,
    ...(width && { width }),
  };

  return (
    <div className={panelClasses} style={panelStyles} {...props}>
      {(title || description) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
