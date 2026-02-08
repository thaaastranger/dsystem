import React, { useState } from 'react';
import { Panel } from '../components/Panel';
import { Activity, BookOpen, Box, Users, Settings } from 'lucide-react';

/**
 * Foundation Page
 * Displays all design tokens organized by category
 */

interface FoundationPageProps {
  onNavigateToList: () => void;
}

export const FoundationPage: React.FC<FoundationPageProps> = ({ onNavigateToList }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { label: 'Overview', active: activeTab === 'Overview' },
  ];

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
  };

  // Token categories
  const tokenCategories = [
    {
      title: 'Spacing',
      description: 'Padding and margin scale tokens',
      tokens: [
        { name: '--padding-padding-1', value: '2px' },
        { name: '--padding-padding-2', value: '4px' },
        { name: '--padding-padding-3', value: '6px' },
        { name: '--padding-padding-4', value: '8px' },
        { name: '--padding-padding-5', value: '10px' },
        { name: '--padding-padding-6', value: '12px' },
        { name: '--padding-padding-7', value: '16px' },
        { name: '--padding-padding-8', value: '20px' },
        { name: '--padding-padding-9', value: '24px' },
        { name: '--padding-padding-10', value: '28px' },
        { name: '--padding-padding-11', value: '32px' },
        { name: '--padding-padding-12', value: '40px' },
        { name: '--padding-padding-13', value: '48px' },
      ],
    },
    {
      title: 'Border Radius',
      description: 'Corner radius scale tokens',
      tokens: [
        { name: '--radi-1', value: '0px' },
        { name: '--radi-2', value: '2px' },
        { name: '--radi-3', value: '4px' },
        { name: '--radi-4', value: '6px' },
        { name: '--radi-5', value: '8px' },
        { name: '--radi-6', value: '12px' },
        { name: '--radi-7', value: '16px' },
        { name: '--radi-8', value: '20px' },
        { name: '--radi-9', value: '24px' },
        { name: '--radi-10', value: '28px' },
        { name: '--radi-11', value: '32px' },
        { name: '--radi-12', value: '40px' },
        { name: '--radi-13', value: '48px' },
        { name: '--radi-14', value: '56px' },
        { name: '--radi-15', value: '64px' },
      ],
    },
    {
      title: 'Typography',
      description: 'Font family, size, and weight tokens',
      tokens: [
        { name: '--typography-fontFamily-inter', value: 'Inter' },
        { name: '--typography-fontSize-12', value: '12px' },
        { name: '--typography-fontSize-14', value: '14px' },
        { name: '--typography-fontSize-16', value: '16px' },
        { name: '--typography-fontSize-18', value: '18px' },
        { name: '--typography-fontSize-20', value: '20px' },
        { name: '--typography-fontSize-24', value: '24px' },
        { name: '--typography-fontWeight-regular', value: '400' },
        { name: '--typography-fontWeight-medium', value: '500' },
        { name: '--typography-fontWeight-semibold', value: '600' },
        { name: '--typography-fontWeight-bold', value: '700' },
      ],
    },
    {
      title: 'Grey Scale',
      description: 'Neutral color palette',
      tokens: [
        { name: '--raw-grey-white', value: '#FFFFFF', isColor: true },
        { name: '--raw-grey-grey-10', value: '#FFFFFF', isColor: true },
        { name: '--raw-grey-grey-20', value: '#F7F7F7', isColor: true },
        { name: '--raw-grey-grey-30', value: '#EDEDED', isColor: true },
        { name: '--raw-grey-grey-40', value: '#DBDBDB', isColor: true },
        { name: '--raw-grey-grey-50', value: '#BABABA', isColor: true },
        { name: '--raw-grey-grey-60', value: '#8F8F8F', isColor: true },
        { name: '--raw-grey-grey-70', value: '#6B6B6B', isColor: true },
        { name: '--raw-grey-grey-80', value: '#4D4D4D', isColor: true },
        { name: '--raw-grey-grey-90', value: '#333333', isColor: true },
        { name: '--raw-grey-grey-100', value: '#141414', isColor: true },
        { name: '--raw-grey-black', value: '#000000', isColor: true },
      ],
    },
    {
      title: 'Blue',
      description: 'Primary blue color scale',
      tokens: [
        { name: '--raw-blue-blue-10', value: '#EDF4FF', isColor: true },
        { name: '--raw-blue-blue-20', value: '#CCE0FF', isColor: true },
        { name: '--raw-blue-blue-30', value: '#99C2FF', isColor: true },
        { name: '--raw-blue-blue-40', value: '#61A1FF', isColor: true },
        { name: '--raw-blue-blue-50', value: '#3B8AFF', isColor: true },
        { name: '--raw-blue-blue-60', value: '#2170F0', isColor: true },
        { name: '--raw-blue-blue-70', value: '#1959C7', isColor: true },
        { name: '--raw-blue-blue-80', value: '#134699', isColor: true },
        { name: '--raw-blue-blue-90', value: '#0D2E6B', isColor: true },
        { name: '--raw-blue-blue-100', value: '#081D47', isColor: true },
      ],
    },
    {
      title: 'Green',
      description: 'Success green color scale',
      tokens: [
        { name: '--raw-green-green-10', value: '#EEFAF3', isColor: true },
        { name: '--raw-green-green-20', value: '#C7F0DB', isColor: true },
        { name: '--raw-green-green-30', value: '#94DEB9', isColor: true },
        { name: '--raw-green-green-40', value: '#61C796', isColor: true },
        { name: '--raw-green-green-50', value: '#42B081', isColor: true },
        { name: '--raw-green-green-60', value: '#2E976E', isColor: true },
        { name: '--raw-green-green-70', value: '#217D5C', isColor: true },
        { name: '--raw-green-green-80', value: '#175F47', isColor: true },
        { name: '--raw-green-green-90', value: '#0F4333', isColor: true },
        { name: '--raw-green-green-100', value: '#092B21', isColor: true },
      ],
    },
    {
      title: 'Red',
      description: 'Error red color scale',
      tokens: [
        { name: '--raw-red-red-10', value: '#FFF0F0', isColor: true },
        { name: '--raw-red-red-20', value: '#FFD1D1', isColor: true },
        { name: '--raw-red-red-30', value: '#FFA3A3', isColor: true },
        { name: '--raw-red-red-40', value: '#F56F6F', isColor: true },
        { name: '--raw-red-red-50', value: '#E64D4D', isColor: true },
        { name: '--raw-red-red-60', value: '#CC3333', isColor: true },
        { name: '--raw-red-red-70', value: '#A32929', isColor: true },
        { name: '--raw-red-red-80', value: '#7D1F1F', isColor: true },
        { name: '--raw-red-red-90', value: '#571414', isColor: true },
        { name: '--raw-red-red-100', value: '#380D0D', isColor: true },
      ],
    },
    {
      title: 'Yellow',
      description: 'Warning yellow color scale',
      tokens: [
        { name: '--raw-yellow-yellow-10', value: '#FFF9EB', isColor: true },
        { name: '--raw-yellow-yellow-20', value: '#FFF0C7', isColor: true },
        { name: '--raw-yellow-yellow-30', value: '#FFE191', isColor: true },
        { name: '--raw-yellow-yellow-40', value: '#FAD05C', isColor: true },
        { name: '--raw-yellow-yellow-50', value: '#F3B538', isColor: true },
        { name: '--raw-yellow-yellow-60', value: '#E09E1F', isColor: true },
        { name: '--raw-yellow-yellow-70', value: '#B87F17', isColor: true },
        { name: '--raw-yellow-yellow-80', value: '#896111', isColor: true },
        { name: '--raw-yellow-yellow-90', value: '#61440C', isColor: true },
        { name: '--raw-yellow-yellow-100', value: '#402E07', isColor: true },
      ],
    },
    {
      title: 'Button Tokens',
      description: 'Button component specific tokens',
      tokens: [
        { name: '--button-fill-enabled', value: '#000000', isColor: true },
        { name: '--button-fill-hovered', value: '#333333', isColor: true },
        { name: '--button-fill-pressed', value: '#4D4D4D', isColor: true },
        { name: '--button-fill-disabled', value: '#DBDBDB', isColor: true },
        { name: '--button-fill-label-enabled', value: '#FFFFFF', isColor: true },
        { name: '--button-fill-label-disabled', value: '#BABABA', isColor: true },
        { name: '--button-outline-stroke-enabled', value: '#000000', isColor: true },
        { name: '--button-outline-stroke-hovered', value: '#333333', isColor: true },
        { name: '--button-outline-stroke-pressed', value: '#4D4D4D', isColor: true },
        { name: '--button-outline-stroke-disabled', value: '#DBDBDB', isColor: true },
        { name: '--button-outline-label-enabled', value: '#000000', isColor: true },
        { name: '--button-outline-label-disabled', value: '#BABABA', isColor: true },
        { name: '--button-text-only-label-enabled', value: '#000000', isColor: true },
        { name: '--button-text-only-label-disabled', value: '#BABABA', isColor: true },
      ],
    },
    {
      title: 'Semantic Tokens',
      description: 'Context-aware color tokens',
      tokens: [
        { name: '--foreground-inverseprimary', value: '#000000', isColor: true },
        { name: '--foreground-secondary', value: '#F7F7F7', isColor: true },
        { name: '--foreground-inversetertiary', value: '#8F8F8F', isColor: true },
        { name: '--foreground-disabled', value: '#BABABA', isColor: true },
        { name: '--background-primary', value: '#000000', isColor: true },
        { name: '--background-disabled', value: '#EDEDED', isColor: true },
        { name: '--border-selected', value: '#000000', isColor: true },
        { name: '--fill-content', value: '#000000', isColor: true },
        { name: '--fill-contentdisabled', value: '#BABABA', isColor: true },
        { name: '--semantic-error', value: '#CC3333', isColor: true },
        { name: '--semantic-success', value: '#2E976E', isColor: true },
        { name: '--semantic-warning', value: '#E09E1F', isColor: true },
      ],
    },
    {
      title: 'State Layers',
      description: 'Hover and pressed state opacity tokens',
      tokens: [
        { name: '--state-layer-on-surface-hovered-opacity', value: '0.04' },
        { name: '--state-layer-on-surface-pressed-opacity', value: '0.12' },
      ],
    },
  ];

  return (
    <Panel
      title="Foundation"
      breadcrumb={['Foundation']}
      tabs={tabs.map((tab) => ({
        ...tab,
        onClick: () => handleTabClick(tab.label),
      }))}
      sidebarItems={[
        { label: 'Status', icon: <Activity size={20} /> },
        { label: 'Foundation', icon: <BookOpen size={20} />, active: true },
        { label: 'Components', icon: <Box size={20} />, onClick: onNavigateToList },
        { label: 'Members', icon: <Users size={20} /> },
        { label: 'Settings', icon: <Settings size={20} /> },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <section>
          <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
            Design Tokens
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
            All design tokens used throughout the design system. These tokens ensure consistency across all components.
          </p>
        </section>

        {tokenCategories.map((category) => (
          <section
            key={category.title}
            style={{
              padding: '32px',
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '8px' }}>
              {category.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: '24px' }}>
              {category.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: category.tokens[0]?.isColor ? 'repeat(auto-fill, minmax(200px, 1fr))' : '1fr 1fr',
              gap: '16px',
            }}>
              {category.tokens.map((token) => (
                <div
                  key={token.name}
                  style={{
                    display: 'flex',
                    flexDirection: token.isColor ? 'column' : 'row',
                    alignItems: token.isColor ? 'flex-start' : 'center',
                    gap: token.isColor ? '8px' : '24px',
                    padding: token.isColor ? '0' : '8px 0',
                  }}
                >
                  {token.isColor && (
                    <div style={{
                      width: '100%',
                      height: '80px',
                      backgroundColor: token.value,
                      borderRadius: '6px',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }} />
                  )}
                  <div style={{ flex: token.isColor ? 'none' : 1 }}>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      color: '#0066cc',
                      fontWeight: '500',
                      marginBottom: token.isColor ? '4px' : '0',
                    }}>
                      {token.name}
                    </div>
                    {token.isColor && (
                      <div style={{
                        fontSize: '12px',
                        color: 'rgba(0,0,0,0.5)',
                        fontFamily: 'monospace',
                      }}>
                        {token.value}
                      </div>
                    )}
                  </div>
                  {!token.isColor && (
                    <div style={{
                      fontSize: '13px',
                      color: 'rgba(0,0,0,0.7)',
                      fontFamily: 'monospace',
                      textAlign: 'right',
                    }}>
                      {token.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Panel>
  );
};
