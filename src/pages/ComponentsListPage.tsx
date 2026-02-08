import React from 'react';
import { Panel } from '../components/Panel';
import { ComponentCard } from '../components/ComponentCard';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { AlertCircle, Info, Activity, BookOpen, Box, Users, Settings } from 'lucide-react';

/**
 * Components List Page
 * Main gallery page showing all available components
 * Based on Figma design node-id=4-500
 */

interface ComponentsListPageProps {
  onComponentClick: (componentId: string) => void;
  onNavigateToList: () => void;
}

export const ComponentsListPage: React.FC<ComponentsListPageProps> = ({
  onComponentClick,
  onNavigateToList,
}) => {
  // Define available components
  const components = [
    {
      id: 'button',
      title: 'Button',
      preview: (
        <Button variant="filled" iconLeft={<AlertCircle size={20} />}>
          Button
        </Button>
      ),
    },
    {
      id: 'inputs',
      title: 'Inputs',
      preview: (
        <div style={{ width: '168px', transform: 'scale(0.9)' }}>
          <Input
            label="Email address"
            placeholder="hi@example.com"
            helperText="Helper"
            trailingIcon={<Info size={16} />}
          />
        </div>
      ),
    },
  ];

  return (
    <Panel
      title="Components"
      breadcrumb={['Components']}
      tabs={[
        { label: 'Overview', active: true },
      ]}
      sidebarItems={[
        { label: 'Status', icon: <Activity size={20} /> },
        { label: 'Foundation', icon: <BookOpen size={20} /> },
        { label: 'Components', icon: <Box size={20} />, active: true, onClick: onNavigateToList },
        { label: 'Members', icon: <Users size={20} /> },
        { label: 'Settings', icon: <Settings size={20} /> },
      ]}
    >
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            title={component.title}
            preview={component.preview}
            onClick={() => onComponentClick(component.id)}
          />
        ))}
      </div>
    </Panel>
  );
};
