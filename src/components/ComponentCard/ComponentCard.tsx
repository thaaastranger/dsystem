import React from 'react';
import styles from './ComponentCard.module.css';

/**
 * Component Card
 * Displays a preview card for a component in the components gallery
 */

export interface ComponentCardProps {
  title: string;
  preview: React.ReactNode;
  onClick?: () => void;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  preview,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.previewArea}>
        {preview}
      </div>
      <div className={styles.titleArea}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};
