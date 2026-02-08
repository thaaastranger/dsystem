import React from 'react';
import { Panel } from '../components/Panel';
import { Activity, BookOpen, Box, Users, Settings, Package, Palette, Type, Layers } from 'lucide-react';

/**
 * Status Page
 * Main landing page showing design system overview and statistics
 */

interface StatusPageProps {
  onNavigateToList: () => void;
  onNavigateToFoundation: () => void;
  onNavigateToStatus: () => void;
}

export const StatusPage: React.FC<StatusPageProps> = ({
  onNavigateToList,
  onNavigateToFoundation,
  onNavigateToStatus,
}) => {
  return (
    <Panel
      title="Design System Status"
      breadcrumb={['Status']}
      tabs={[
        { label: 'Overview', active: true },
      ]}
      sidebarItems={[
        { label: 'Status', icon: <Activity size={20} />, active: true, onClick: onNavigateToStatus },
        { label: 'Foundation', icon: <BookOpen size={20} />, onClick: onNavigateToFoundation },
        { label: 'Components', icon: <Box size={20} />, onClick: onNavigateToList },
        { label: 'Members', icon: <Users size={20} /> },
        { label: 'Settings', icon: <Settings size={20} /> },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Welcome Section */}
        <section>
          <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '12px', marginTop: 0 }}>
            Welcome to the Design System
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: 0, lineHeight: '1.6' }}>
            A comprehensive design system built with React, TypeScript, and design tokens.
            This system provides consistent UI components and design foundations for building modern applications.
          </p>
        </section>

        {/* Statistics Cards */}
        <section>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}>
            {[
              {
                icon: <Package size={24} />,
                label: 'Components',
                value: '2',
                description: 'Button, Input',
                color: '#2170F0',
                bgColor: '#EDF4FF',
              },
              {
                icon: <Palette size={24} />,
                label: 'Design Tokens',
                value: '171',
                description: 'Colors, Spacing, Typography',
                color: '#2E976E',
                bgColor: '#EEFAF3',
              },
              {
                icon: <Type size={24} />,
                label: 'Color Scales',
                value: '5',
                description: 'Grey, Blue, Green, Red, Yellow',
                color: '#E09E1F',
                bgColor: '#FFF9EB',
              },
              {
                icon: <Layers size={24} />,
                label: 'Variants',
                value: '5',
                description: 'Filled, Outlined, Ghost, Default, Error',
                color: '#CC3333',
                bgColor: '#FFF0F0',
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  backgroundColor: '#fafafa',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: stat.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color,
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '600',
                    color: 'rgba(0,0,0,0.9)',
                  }}>
                    {stat.value}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'rgba(0,0,0,0.8)',
                    marginBottom: '4px',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(0,0,0,0.5)',
                    lineHeight: '1.4',
                  }}>
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', marginTop: 0 }}>
            Quick Links
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '12px',
          }}>
            {[
              {
                title: 'Foundation',
                description: 'Design tokens, color scales, typography, and spacing',
                onClick: onNavigateToFoundation,
                icon: <BookOpen size={18} />,
              },
              {
                title: 'Components',
                description: 'Browse all available UI components with examples',
                onClick: onNavigateToList,
                icon: <Box size={18} />,
              },
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={link.onClick}
                style={{
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.24)';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: '#f7f7f7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(0,0,0,0.7)',
                  flexShrink: 0,
                }}>
                  {link.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(0,0,0,0.9)',
                    marginBottom: '4px',
                  }}>
                    {link.title}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(0,0,0,0.6)',
                    lineHeight: '1.4',
                  }}>
                    {link.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* System Info */}
        <section>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', marginTop: 0 }}>
            System Information
          </h3>
          <div style={{
            padding: '24px',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.08)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '12px 24px',
              fontSize: '13px',
            }}>
              {[
                { label: 'Version', value: 'v1.2.0' },
                { label: 'Last Updated', value: '2026-02-08' },
                { label: 'Framework', value: 'React + TypeScript' },
                { label: 'Build Tool', value: 'Vite' },
                { label: 'Token System', value: 'CSS Variables' },
                { label: 'Icon Library', value: 'Lucide React' },
              ].map((info, idx) => (
                <React.Fragment key={idx}>
                  <div style={{
                    fontWeight: '600',
                    color: 'rgba(0,0,0,0.7)',
                  }}>
                    {info.label}
                  </div>
                  <div style={{
                    color: 'rgba(0,0,0,0.9)',
                  }}>
                    {info.value}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', marginTop: 0 }}>
            Recent Updates
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {[
              { date: '2026-02-08', type: 'Added', description: 'Redesigned color tokens with horizontal scale layout' },
              { date: '2026-02-08', type: 'Added', description: 'Changelog tabs for Button and Input components' },
              { date: '2026-02-08', type: 'Added', description: 'Foundation page with all 171 design tokens' },
              { date: '2026-02-08', type: 'Changed', description: 'Updated all icons from emoji to Lucide React' },
            ].map((update, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '6px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '500',
                    backgroundColor: update.type === 'Added' ? '#EEFAF3' : '#EDF4FF',
                    color: update.type === 'Added' ? '#2E976E' : '#2170F0',
                    flexShrink: 0,
                  }}
                >
                  {update.type}
                </span>
                <span style={{
                  fontSize: '13px',
                  color: 'rgba(0,0,0,0.8)',
                  flex: 1,
                }}>
                  {update.description}
                </span>
                <span style={{
                  fontSize: '11px',
                  color: 'rgba(0,0,0,0.4)',
                  fontFamily: 'monospace',
                  flexShrink: 0,
                }}>
                  {update.date}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Panel>
  );
};
