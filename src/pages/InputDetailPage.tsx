import React, { useState } from 'react';
import { Panel } from '../components/Panel';
import { Input } from '../components/Input';
import { Mail, Lock, Search, User, Info, Activity, BookOpen, Box, Users, Settings } from 'lucide-react';

/**
 * Input Detail Page
 * Documentation and examples for Input component
 */

interface InputDetailPageProps {
  onBack: () => void;
  onBreadcrumbClick: (index: number, label: string) => void;
  onNavigateToList: () => void;
  onNavigateToFoundation?: () => void;
}

export const InputDetailPage: React.FC<InputDetailPageProps> = ({ onBack, onBreadcrumbClick, onNavigateToList, onNavigateToFoundation }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { label: 'Overview', active: activeTab === 'Overview' },
    { label: 'Usage', active: activeTab === 'Usage' },
    { label: 'Code', active: activeTab === 'Code' },
    { label: 'Specs', active: activeTab === 'Specs' },
    { label: 'Changelog', active: activeTab === 'Changelog' },
  ];

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
  };

  const OverviewView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* Input States */}
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
          Input States
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          maxWidth: '400px',
        }}>
          <div>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Default</p>
            <Input
              label="Email address"
              placeholder="Enter your email"
              helperText="We'll never share your email"
            />
          </div>
          <div>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>With Value</p>
            <Input
              label="Email address"
              defaultValue="user@example.com"
              helperText="We'll never share your email"
            />
          </div>
          <div>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
            <Input
              label="Email address"
              placeholder="Enter your email"
              helperText="This field is disabled"
              disabled
            />
          </div>
          <div>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Error</p>
            <Input
              label="Email address"
              defaultValue="invalid-email"
              error
              errorMessage="Please enter a valid email address"
            />
          </div>
        </div>
      </section>

      {/* Input with Icons */}
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
          Input with Icons
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          maxWidth: '400px',
        }}>
          <Input
            label="Email"
            placeholder="Enter your email"
            leadingIcon={<Mail size={16} />}
            helperText="Leading icon"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            trailingIcon={<Info size={16} />}
            helperText="Trailing icon"
          />
          <Input
            label="Search"
            placeholder="Search..."
            leadingIcon={<Search size={16} />}
            trailingIcon={<Info size={16} />}
            helperText="Both icons"
          />
        </div>
      </section>

      {/* Input Types */}
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
          Input Types
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          maxWidth: '400px',
        }}>
          <Input
            label="Text"
            type="text"
            placeholder="Enter text"
            helperText="Standard text input"
          />
          <Input
            label="Email"
            type="email"
            placeholder="user@example.com"
            leadingIcon={<Mail size={16} />}
            helperText="Email input with validation"
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            leadingIcon={<Lock size={16} />}
            helperText="Password input"
          />
          <Input
            label="Number"
            type="number"
            placeholder="123"
            helperText="Number input"
          />
          <Input
            label="Search"
            type="search"
            placeholder="Search..."
            leadingIcon={<Search size={16} />}
            helperText="Search input"
          />
        </div>
      </section>

      {/* Design Tokens Info */}
      <section style={{
        padding: '24px',
        backgroundColor: '#f7f7f7',
        borderRadius: '6px',
      }}>
        <h3 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px' }}>
          Design Tokens
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          fontSize: '13px',
          color: 'rgba(0,0,0,0.7)',
        }}>
          <div>• Padding: 8px</div>
          <div>• Border radius: 6px</div>
          <div>• Font: CircularXX Regular 14px</div>
          <div>• Icon size: 16-20px</div>
          <div>• Gap: 6px</div>
          <div>• Helper text: 12px</div>
        </div>
      </section>
    </div>
  );

  const SpecsView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Design Specifications
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          Token-driven design specifications for the Input component.
        </p>
      </section>

      {/* States Specs */}
      {['Default', 'Hover', 'Focus', 'Disabled'].map((stateName) => (
        <section
          key={stateName}
          style={{
            padding: '32px',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '16px' }}>
              {stateName} State
            </h3>
            <div style={{
              display: 'inline-flex',
              padding: '16px 24px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              <div style={{ width: '300px' }}>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper text"
                  disabled={stateName === 'Disabled'}
                  trailingIcon={<Info size={16} />}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h4 style={{
              fontSize: '13px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'rgba(0,0,0,0.5)',
              marginTop: 0,
              marginBottom: '16px',
            }}>
              Design Tokens
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '12px 24px',
              fontSize: '14px',
            }}>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>Padding</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                --padding-padding-4
              </div>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>Border Radius</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                --radi-4
              </div>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>Font Size</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                --typography-fontSize-14
              </div>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>Gap</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                --padding-padding-3
              </div>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>Background</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                {stateName === 'Disabled' ? '--background-disabled' : '--foreground-secondary'}
              </div>
              {stateName === 'Focus' && (
                <>
                  <div style={{ color: 'rgba(0,0,0,0.7)' }}>Border Color</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                    --border-selected
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <Panel
      title="Input Component"
      breadcrumb={['Components', 'Input']}
      onBreadcrumbClick={onBreadcrumbClick}
      tabs={tabs.map((tab) => ({
        ...tab,
        onClick: () => handleTabClick(tab.label),
      }))}
      sidebarItems={[
        { label: 'Status', icon: <Activity size={20} /> },
        { label: 'Foundation', icon: <BookOpen size={20} />, onClick: onNavigateToFoundation },
        { label: 'Components', icon: <Box size={20} />, active: true, onClick: onNavigateToList },
        { label: 'Members', icon: <Users size={20} /> },
        { label: 'Settings', icon: <Settings size={20} /> },
      ]}
    >
      {activeTab === 'Overview' && <OverviewView />}
      {activeTab === 'Specs' && <SpecsView />}
      {activeTab === 'Usage' && (
        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)' }}>
          Usage documentation coming soon...
        </div>
      )}
      {activeTab === 'Code' && (
        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)' }}>
          Code examples coming soon...
        </div>
      )}
      {activeTab === 'Changelog' && (
        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)' }}>
          Changelog coming soon...
        </div>
      )}
    </Panel>
  );
};
