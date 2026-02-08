import React, { useState } from 'react';
import { Button } from './components/Button';
import { Panel } from './components/Panel';
import { AlertCircle, Star, Activity, BookOpen, Box, Users, Settings } from 'lucide-react';
import { ComponentsListPage } from './pages/ComponentsListPage';
import { InputDetailPage } from './pages/InputDetailPage';
import { FoundationPage } from './pages/FoundationPage';
import './tokens/tokens.css';
import './App.css';

/**
 * Design System App
 * Main application with navigation between components list and detail pages
 */

// Specs component showing design tokens
const SpecsView = () => {
  const variants = [
    {
      name: 'Filled',
      variant: 'filled' as const,
      tokens: {
        'Padding X': '--padding-padding-6',
        'Padding Y': '--padding-padding-3',
        'Border Radius': '--radi-4',
        'Font Size': '--typography-fontSize-14',
        'Font Weight': '500',
        'Gap': '--padding-padding-2',
        'Min Height': '32px',
        'Background (Enabled)': '--button-fill-enabled',
        'Background (Hovered)': '--button-fill-hovered',
        'Background (Pressed)': '--button-fill-pressed',
        'Background (Disabled)': '--button-fill-disabled',
        'Text Color (Enabled)': '--button-fill-label-enabled',
        'Text Color (Disabled)': '--button-fill-label-disabled',
      },
    },
    {
      name: 'Outlined',
      variant: 'outlined' as const,
      tokens: {
        'Padding X': '--padding-padding-6',
        'Padding Y': '--padding-padding-3',
        'Border Radius': '--radi-4',
        'Font Size': '--typography-fontSize-14',
        'Font Weight': '500',
        'Gap': '--padding-padding-2',
        'Min Height': '32px',
        'Border (Enabled)': '--button-outline-stroke-enabled',
        'Border (Hovered)': '--button-outline-stroke-hovered',
        'Border (Pressed)': '--button-outline-stroke-pressed',
        'Border (Disabled)': '--button-outline-stroke-disabled',
        'Text Color (Enabled)': '--button-outline-label-enabled',
        'Text Color (Disabled)': '--button-outline-label-disabled',
      },
    },
    {
      name: 'Ghost',
      variant: 'ghost' as const,
      tokens: {
        'Padding X': '--padding-padding-6',
        'Padding Y': '--padding-padding-3',
        'Border Radius': '--radi-4',
        'Font Size': '--typography-fontSize-14',
        'Font Weight': '500',
        'Gap': '--padding-padding-2',
        'Min Height': '32px',
        'State Layer (Hovered)': '--state-layer-on-surface-hovered-opacity',
        'State Layer (Pressed)': '--state-layer-on-surface-pressed-opacity',
        'Text Color (Enabled)': '--button-text-only-label-enabled',
        'Text Color (Disabled)': '--button-text-only-label-disabled',
      },
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Design Specifications
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          Token-driven design specifications for the Button component. All values are managed through design tokens.
        </p>
      </section>

      {variants.map((spec) => (
        <section
          key={spec.name}
          style={{
            padding: '32px',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '16px' }}>
              {spec.name}
            </h3>
            <div style={{
              display: 'inline-flex',
              padding: '16px 24px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              <Button variant={spec.variant} iconLeft={<Star size={20} />}>
                {spec.name} Button
              </Button>
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
              {Object.entries(spec.tokens).map(([property, token]) => (
                <React.Fragment key={property}>
                  <div style={{ color: 'rgba(0,0,0,0.7)', fontWeight: '400' }}>
                    {property}
                  </div>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    color: '#0066cc',
                    fontWeight: '500',
                  }}>
                    {token}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Common Tokens */}
      <section
        style={{
          padding: '32px',
          backgroundColor: '#f7f7f7',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '16px' }}>
          Shared Design Tokens
        </h3>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '24px' }}>
          These tokens are shared across all button variants and states.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
        }}>
          <div style={{ color: 'rgba(0,0,0,0.7)' }}>Typography</div>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
            --typography-fontFamily-inter
          </div>
          <div style={{ color: 'rgba(0,0,0,0.7)' }}>Transition</div>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
            150ms ease
          </div>
          <div style={{ color: 'rgba(0,0,0,0.7)' }}>Icon Size</div>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
            20px
          </div>
        </div>
      </section>
    </div>
  );
};

// Overview component (existing content)
const OverviewView = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
    {/* Button Grid - All Variants */}
    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
        Button Variants
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '24px 48px',
        justifyContent: 'start',
      }}>
        {/* Row 1: Enabled State */}
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Filled</p>
          <Button variant="filled" iconLeft={<AlertCircle size={20} />} iconRight={<AlertCircle size={20} />}>
            Label
          </Button>
        </div>
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Outlined</p>
          <Button variant="outlined" iconLeft={<AlertCircle size={20} />} iconRight={<AlertCircle size={20} />}>
            Label
          </Button>
        </div>
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Ghost (Text Only)</p>
          <Button variant="ghost" iconLeft={<AlertCircle size={20} />} iconRight={<AlertCircle size={20} />}>
            Label
          </Button>
        </div>

        {/* Row 2: Disabled State */}
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
          <Button variant="filled" iconLeft={<AlertCircle size={20} />} iconRight={<AlertCircle size={20} />} disabled>
            Label
          </Button>
        </div>
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
          <Button variant="outlined" iconLeft={<AlertCircle size={20} />} iconRight={<AlertCircle size={20} />} disabled>
            Label
          </Button>
        </div>
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
          <Button variant="ghost" iconLeft={<AlertCircle size={20} />} iconRight={<AlertCircle size={20} />} disabled>
            Label
          </Button>
        </div>
      </div>
    </section>

    {/* Icon Variations */}
    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
        Icon Variations
      </h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="filled" iconLeft={<Star size={20} />}>
          Icon Left
        </Button>
        <Button variant="outlined" iconRight={<Star size={20} />}>
          Icon Right
        </Button>
        <Button variant="ghost" iconLeft={<Star size={20} />} iconRight={<Star size={20} />}>
          Both Icons
        </Button>
        <Button variant="filled">
          No Icons
        </Button>
      </div>
    </section>

    {/* Interactive Examples */}
    <section>
      <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', marginTop: 0 }}>
        Interactive States
      </h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="filled" onClick={() => alert('Filled button clicked')}>
          Click Me
        </Button>
        <Button variant="outlined" onClick={() => alert('Outlined button clicked')}>
          Click Me
        </Button>
        <Button variant="ghost" onClick={() => alert('Ghost button clicked')}>
          Click Me
        </Button>
      </div>
      <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginTop: '16px', marginBottom: 0 }}>
        Try hovering and clicking the buttons to see state changes
      </p>
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
        <div>• Padding: 6px × 12px</div>
        <div>• Border radius: 6px</div>
        <div>• Font: Inter Medium 14px</div>
        <div>• Icon size: 20px</div>
        <div>• Gap: 4px</div>
        <div>• Min height: 32px</div>
      </div>
    </section>
  </div>
);

// Button Detail Page component
interface ButtonDetailPageProps {
  onBack: () => void;
  onBreadcrumbClick: (index: number, label: string) => void;
  onNavigateToList: () => void;
  onNavigateToFoundation?: () => void;
}

const ButtonDetailPage: React.FC<ButtonDetailPageProps> = ({ onBack, onBreadcrumbClick, onNavigateToList, onNavigateToFoundation }) => {
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

  const breadcrumbItems = ['Components', 'Button'];

  return (
    <Panel
      title="Button Component"
      breadcrumb={breadcrumbItems}
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <section>
            <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
              Changelog
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
              Track all changes and updates to the Button component.
            </p>
          </section>

          {/* Changelog Entries */}
          {[
            {
              date: '2026-02-08',
              version: 'v1.2.0',
              changes: [
                { type: 'Added', description: 'Specs tab with comprehensive token documentation' },
                { type: 'Added', description: 'Token references in Component Tokens tab of Foundation page' },
                { type: 'Changed', description: 'Updated icons from emoji to Lucide React icons' },
              ],
            },
            {
              date: '2026-02-08',
              version: 'v1.1.0',
              changes: [
                { type: 'Added', description: 'Navigation support for sidebar and breadcrumb' },
                { type: 'Added', description: 'Foundation page integration' },
              ],
            },
            {
              date: '2026-02-08',
              version: 'v1.0.0',
              changes: [
                { type: 'Added', description: 'Initial Button component implementation' },
                { type: 'Added', description: 'Three variants: Filled, Outlined, Ghost' },
                { type: 'Added', description: 'Icon support (left and right positions)' },
                { type: 'Added', description: 'Disabled state' },
                { type: 'Added', description: 'Token-driven design system' },
                { type: 'Added', description: 'Hover, active, and focus states' },
              ],
            },
          ].map((entry, idx) => (
            <section
              key={idx}
              style={{
                padding: '24px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '500', margin: 0 }}>
                  {entry.version}
                </h3>
                <span style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', fontFamily: 'monospace' }}>
                  {entry.date}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {entry.changes.map((change, changeIdx) => (
                  <div key={changeIdx} style={{ display: 'flex', gap: '8px', fontSize: '14px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: change.type === 'Added' ? '#EEFAF3' : change.type === 'Changed' ? '#EDF4FF' : '#FFF0F0',
                        color: change.type === 'Added' ? '#2E976E' : change.type === 'Changed' ? '#2170F0' : '#CC3333',
                      }}
                    >
                      {change.type}
                    </span>
                    <span style={{ color: 'rgba(0,0,0,0.8)' }}>{change.description}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </Panel>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState<'list' | 'button' | 'inputs' | 'foundation'>('list');

  const handleComponentClick = (componentId: string) => {
    setCurrentPage(componentId as 'button' | 'inputs');
  };

  const handleBackToList = () => {
    setCurrentPage('list');
  };

  const handleNavigateToFoundation = () => {
    setCurrentPage('foundation');
  };

  const handleBreadcrumbClick = (index: number, label: string) => {
    // If clicking on "Components" in breadcrumb, go back to list
    if (label === 'Components') {
      setCurrentPage('list');
    }
  };

  // Render appropriate page based on current navigation state
  if (currentPage === 'list') {
    return (
      <ComponentsListPage
        onComponentClick={handleComponentClick}
        onNavigateToList={handleBackToList}
        onNavigateToFoundation={handleNavigateToFoundation}
      />
    );
  }

  if (currentPage === 'foundation') {
    return (
      <FoundationPage
        onNavigateToList={handleBackToList}
      />
    );
  }

  if (currentPage === 'button') {
    return (
      <ButtonDetailPage
        onBack={handleBackToList}
        onBreadcrumbClick={handleBreadcrumbClick}
        onNavigateToList={handleBackToList}
        onNavigateToFoundation={handleNavigateToFoundation}
      />
    );
  }

  if (currentPage === 'inputs') {
    return (
      <InputDetailPage
        onBack={handleBackToList}
        onBreadcrumbClick={handleBreadcrumbClick}
        onNavigateToList={handleBackToList}
        onNavigateToFoundation={handleNavigateToFoundation}
      />
    );
  }

  // Default fallback
  return (
    <ComponentsListPage
      onComponentClick={handleComponentClick}
      onNavigateToList={handleBackToList}
    />
  );
}

export default App;
