import React, { useState } from 'react';
import { Panel } from '../components/Panel';
import { Activity, BookOpen, Box, Users, Settings } from 'lucide-react';

/**
 * Foundation Page
 * Displays all design tokens organized by category in tabs
 */

interface FoundationPageProps {
  onNavigateToList: () => void;
}

export const FoundationPage: React.FC<FoundationPageProps> = ({ onNavigateToList }) => {
  const [activeTab, setActiveTab] = useState('Spacing');

  const tabs = [
    { label: 'Spacing', active: activeTab === 'Spacing' },
    { label: 'Border Radius', active: activeTab === 'Border Radius' },
    { label: 'Typography', active: activeTab === 'Typography' },
    { label: 'Colors', active: activeTab === 'Colors' },
    { label: 'Component Tokens', active: activeTab === 'Component Tokens' },
  ];

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
  };

  // Spacing tokens
  const SpacingView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Spacing Tokens
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          Padding and margin scale tokens used throughout the design system. These ensure consistent spacing.
        </p>
      </section>

      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr 150px',
          gap: '16px 24px',
          fontSize: '14px',
        }}>
          {[
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
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#0066cc',
                fontWeight: '500',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(0,0,0,0.7)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
              <div style={{
                height: '24px',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '4px',
              }}
                title={token.value}
              >
                <div style={{
                  height: '100%',
                  width: token.value,
                  backgroundColor: '#0066cc',
                  borderRadius: '4px',
                }} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );

  // Border Radius tokens
  const BorderRadiusView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Border Radius Tokens
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          Corner radius scale tokens for consistent rounded corners across components.
        </p>
      </section>

      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr 120px',
          gap: '24px',
          fontSize: '14px',
        }}>
          {[
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
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#0066cc',
                fontWeight: '500',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(0,0,0,0.7)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#0066cc',
                borderRadius: token.value,
                border: '1px solid rgba(0,0,0,0.08)',
              }} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );

  // Typography tokens
  const TypographyView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Typography Tokens
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          Font family, size, and weight tokens for consistent typography.
        </p>
      </section>

      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '24px' }}>
          Font Family
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px 24px',
          fontSize: '14px',
          marginBottom: '48px',
        }}>
          <div style={{
            fontFamily: 'monospace',
            fontSize: '13px',
            color: '#0066cc',
            fontWeight: '500',
          }}>
            --typography-fontFamily-inter
          </div>
          <div style={{
            fontSize: '13px',
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'monospace',
          }}>
            Inter
          </div>
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '24px' }}>
          Font Sizes
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr auto',
          gap: '16px 24px',
          fontSize: '14px',
          marginBottom: '48px',
        }}>
          {[
            { name: '--typography-fontSize-12', value: '12px' },
            { name: '--typography-fontSize-14', value: '14px' },
            { name: '--typography-fontSize-16', value: '16px' },
            { name: '--typography-fontSize-18', value: '18px' },
            { name: '--typography-fontSize-20', value: '20px' },
            { name: '--typography-fontSize-24', value: '24px' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#0066cc',
                fontWeight: '500',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(0,0,0,0.7)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
              <div style={{ fontSize: token.value }}>
                Aa
              </div>
            </React.Fragment>
          ))}
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '24px' }}>
          Font Weights
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr auto',
          gap: '16px 24px',
          fontSize: '14px',
        }}>
          {[
            { name: '--typography-fontWeight-regular', value: '400' },
            { name: '--typography-fontWeight-medium', value: '500' },
            { name: '--typography-fontWeight-semibold', value: '600' },
            { name: '--typography-fontWeight-bold', value: '700' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#0066cc',
                fontWeight: '500',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(0,0,0,0.7)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
              <div style={{ fontWeight: token.value }}>
                Sample Text
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );

  // Colors view
  const ColorsView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Color Tokens
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          Color scales, semantic tokens, and state layers for consistent color usage across the design system.
        </p>
      </section>

      {[
        {
          title: 'Grey Scale',
          description: 'Neutral color palette',
          tokens: [
            { name: '--raw-grey-white', value: '#FFFFFF' },
            { name: '--raw-grey-grey-10', value: '#FFFFFF' },
            { name: '--raw-grey-grey-20', value: '#F7F7F7' },
            { name: '--raw-grey-grey-30', value: '#EDEDED' },
            { name: '--raw-grey-grey-40', value: '#DBDBDB' },
            { name: '--raw-grey-grey-50', value: '#BABABA' },
            { name: '--raw-grey-grey-60', value: '#8F8F8F' },
            { name: '--raw-grey-grey-70', value: '#6B6B6B' },
            { name: '--raw-grey-grey-80', value: '#4D4D4D' },
            { name: '--raw-grey-grey-90', value: '#333333' },
            { name: '--raw-grey-grey-100', value: '#141414' },
            { name: '--raw-grey-black', value: '#000000' },
          ],
        },
        {
          title: 'Blue',
          description: 'Primary blue color scale',
          tokens: [
            { name: '--raw-blue-blue-10', value: '#EDF4FF' },
            { name: '--raw-blue-blue-20', value: '#CCE0FF' },
            { name: '--raw-blue-blue-30', value: '#99C2FF' },
            { name: '--raw-blue-blue-40', value: '#61A1FF' },
            { name: '--raw-blue-blue-50', value: '#3B8AFF' },
            { name: '--raw-blue-blue-60', value: '#2170F0' },
            { name: '--raw-blue-blue-70', value: '#1959C7' },
            { name: '--raw-blue-blue-80', value: '#134699' },
            { name: '--raw-blue-blue-90', value: '#0D2E6B' },
            { name: '--raw-blue-blue-100', value: '#081D47' },
          ],
        },
        {
          title: 'Green',
          description: 'Success green color scale',
          tokens: [
            { name: '--raw-green-green-10', value: '#EEFAF3' },
            { name: '--raw-green-green-20', value: '#C7F0DB' },
            { name: '--raw-green-green-30', value: '#94DEB9' },
            { name: '--raw-green-green-40', value: '#61C796' },
            { name: '--raw-green-green-50', value: '#42B081' },
            { name: '--raw-green-green-60', value: '#2E976E' },
            { name: '--raw-green-green-70', value: '#217D5C' },
            { name: '--raw-green-green-80', value: '#175F47' },
            { name: '--raw-green-green-90', value: '#0F4333' },
            { name: '--raw-green-green-100', value: '#092B21' },
          ],
        },
        {
          title: 'Red',
          description: 'Error red color scale',
          tokens: [
            { name: '--raw-red-red-10', value: '#FFF0F0' },
            { name: '--raw-red-red-20', value: '#FFD1D1' },
            { name: '--raw-red-red-30', value: '#FFA3A3' },
            { name: '--raw-red-red-40', value: '#F56F6F' },
            { name: '--raw-red-red-50', value: '#E64D4D' },
            { name: '--raw-red-red-60', value: '#CC3333' },
            { name: '--raw-red-red-70', value: '#A32929' },
            { name: '--raw-red-red-80', value: '#7D1F1F' },
            { name: '--raw-red-red-90', value: '#571414' },
            { name: '--raw-red-red-100', value: '#380D0D' },
          ],
        },
        {
          title: 'Yellow',
          description: 'Warning yellow color scale',
          tokens: [
            { name: '--raw-yellow-yellow-10', value: '#FFF9EB' },
            { name: '--raw-yellow-yellow-20', value: '#FFF0C7' },
            { name: '--raw-yellow-yellow-30', value: '#FFE191' },
            { name: '--raw-yellow-yellow-40', value: '#FAD05C' },
            { name: '--raw-yellow-yellow-50', value: '#F3B538' },
            { name: '--raw-yellow-yellow-60', value: '#E09E1F' },
            { name: '--raw-yellow-yellow-70', value: '#B87F17' },
            { name: '--raw-yellow-yellow-80', value: '#896111' },
            { name: '--raw-yellow-yellow-90', value: '#61440C' },
            { name: '--raw-yellow-yellow-100', value: '#402E07' },
          ],
        },
      ].map((category) => (
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '16px',
          }}>
            {category.tokens.map((token) => (
              <div key={token.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: token.value,
                  borderRadius: '6px',
                  border: '1px solid rgba(0,0,0,0.08)',
                }} />
                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: '#0066cc',
                  fontWeight: '500',
                  marginBottom: '4px',
                }}>
                  {token.name}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(0,0,0,0.5)',
                  fontFamily: 'monospace',
                }}>
                  {token.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Semantic Tokens */}
      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '8px' }}>
          Semantic Tokens
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: '24px' }}>
          Context-aware color tokens
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px',
        }}>
          {[
            { name: '--foreground-inverseprimary', value: '#000000' },
            { name: '--foreground-secondary', value: '#F7F7F7' },
            { name: '--foreground-inversetertiary', value: '#8F8F8F' },
            { name: '--foreground-disabled', value: '#BABABA' },
            { name: '--background-primary', value: '#000000' },
            { name: '--background-disabled', value: '#EDEDED' },
            { name: '--border-selected', value: '#000000' },
            { name: '--fill-content', value: '#000000' },
            { name: '--fill-contentdisabled', value: '#BABABA' },
            { name: '--semantic-error', value: '#CC3333' },
            { name: '--semantic-success', value: '#2E976E' },
            { name: '--semantic-warning', value: '#E09E1F' },
          ].map((token) => (
            <div key={token.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                width: '100%',
                height: '80px',
                backgroundColor: token.value,
                borderRadius: '6px',
                border: '1px solid rgba(0,0,0,0.08)',
              }} />
              <div style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#0066cc',
                fontWeight: '500',
                marginBottom: '4px',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(0,0,0,0.5)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* State Layers */}
      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '8px' }}>
          State Layers
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: '24px' }}>
          Hover and pressed state opacity tokens
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px 24px',
          fontSize: '14px',
        }}>
          {[
            { name: '--state-layer-on-surface-hovered-opacity', value: '0.04' },
            { name: '--state-layer-on-surface-pressed-opacity', value: '0.12' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#0066cc',
                fontWeight: '500',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(0,0,0,0.7)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );

  // Component Tokens view
  const ComponentTokensView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px', marginTop: 0 }}>
          Component Tokens
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginTop: 0, marginBottom: '32px' }}>
          All design tokens used by component implementations. Includes spacing, typography, colors, and other properties.
        </p>
      </section>

      {/* Button Component */}
      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '8px' }}>
          Button Component
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: '24px' }}>
          All tokens used in Button component implementation
        </p>

        {/* Spacing */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Spacing
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          {[
            { name: '--padding-padding-6', value: '12px', description: 'Padding X' },
            { name: '--padding-padding-3', value: '6px', description: 'Padding Y' },
            { name: '--padding-padding-2', value: '4px', description: 'Icon Gap' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>{token.description}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                {token.name} <span style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '400' }}>({token.value})</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Border Radius */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Border Radius
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          <div style={{ color: 'rgba(0,0,0,0.7)' }}>Border Radius</div>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
            --radi-4 <span style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '400' }}>(6px)</span>
          </div>
        </div>

        {/* Typography */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Typography
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          {[
            { name: '--typography-fontFamily-inter', value: 'Inter', description: 'Font Family' },
            { name: '--typography-fontSize-14', value: '14px', description: 'Font Size' },
            { name: 'Font Weight: 500', value: 'Medium', description: 'Font Weight' },
          ].map((token, idx) => (
            <React.Fragment key={idx}>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>{token.description}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                {token.name} <span style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '400' }}>({token.value})</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Size & Layout */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Size & Layout
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          {[
            { name: 'Min Height: 32px', value: '32px', description: 'Minimum Height' },
            { name: 'Icon Size: 20px', value: '20px', description: 'Icon Size' },
          ].map((token, idx) => (
            <React.Fragment key={idx}>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>{token.description}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                {token.name}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Colors */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Colors
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px',
        }}>
          {[
            { name: '--button-fill-enabled', value: '#000000' },
            { name: '--button-fill-hovered', value: '#333333' },
            { name: '--button-fill-pressed', value: '#4D4D4D' },
            { name: '--button-fill-disabled', value: '#DBDBDB' },
            { name: '--button-fill-label-enabled', value: '#FFFFFF' },
            { name: '--button-fill-label-disabled', value: '#BABABA' },
            { name: '--button-outline-stroke-enabled', value: '#000000' },
            { name: '--button-outline-stroke-hovered', value: '#333333' },
            { name: '--button-outline-stroke-pressed', value: '#4D4D4D' },
            { name: '--button-outline-stroke-disabled', value: '#DBDBDB' },
            { name: '--button-outline-label-enabled', value: '#000000' },
            { name: '--button-outline-label-disabled', value: '#BABABA' },
            { name: '--button-text-only-label-enabled', value: '#000000' },
            { name: '--button-text-only-label-disabled', value: '#BABABA' },
          ].map((token) => (
            <div key={token.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                width: '100%',
                height: '60px',
                backgroundColor: token.value,
                borderRadius: '6px',
                border: '1px solid rgba(0,0,0,0.08)',
              }} />
              <div style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#0066cc',
                fontWeight: '500',
                marginBottom: '4px',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(0,0,0,0.5)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Input Component */}
      <section
        style={{
          padding: '32px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginTop: 0, marginBottom: '8px' }}>
          Input Component
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: '24px' }}>
          All tokens used in Input component implementation
        </p>

        {/* Spacing */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Spacing
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          {[
            { name: '--padding-padding-4', value: '8px', description: 'Padding' },
            { name: '--padding-padding-3', value: '6px', description: 'Icon Gap' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>{token.description}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                {token.name} <span style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '400' }}>({token.value})</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Border Radius */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Border Radius
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          <div style={{ color: 'rgba(0,0,0,0.7)' }}>Border Radius</div>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
            --radi-4 <span style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '400' }}>(6px)</span>
          </div>
        </div>

        {/* Typography */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Typography
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          {[
            { name: '--typography-fontSize-14', value: '14px', description: 'Font Size (Input)' },
            { name: '--typography-fontSize-12', value: '12px', description: 'Font Size (Label/Helper)' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{ color: 'rgba(0,0,0,0.7)' }}>{token.description}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
                {token.name} <span style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '400' }}>({token.value})</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Size & Layout */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Size & Layout
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '12px 24px',
          fontSize: '14px',
          marginBottom: '32px',
        }}>
          <div style={{ color: 'rgba(0,0,0,0.7)' }}>Icon Size</div>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#0066cc', fontWeight: '500' }}>
            16-20px
          </div>
        </div>

        {/* Colors */}
        <h4 style={{ fontSize: '14px', fontWeight: '500', marginTop: 0, marginBottom: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Colors
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px',
        }}>
          {[
            { name: '--foreground-secondary', value: '#F7F7F7' },
            { name: '--foreground-disabled', value: '#BABABA' },
            { name: '--background-disabled', value: '#EDEDED' },
            { name: '--border-selected', value: '#000000' },
            { name: '--fill-content', value: '#000000' },
            { name: '--fill-contentdisabled', value: '#BABABA' },
            { name: '--semantic-error', value: '#CC3333' },
          ].map((token) => (
            <div key={token.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                width: '100%',
                height: '60px',
                backgroundColor: token.value,
                borderRadius: '6px',
                border: '1px solid rgba(0,0,0,0.08)',
              }} />
              <div style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#0066cc',
                fontWeight: '500',
                marginBottom: '4px',
              }}>
                {token.name}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(0,0,0,0.5)',
                fontFamily: 'monospace',
              }}>
                {token.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

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
      {activeTab === 'Spacing' && <SpacingView />}
      {activeTab === 'Border Radius' && <BorderRadiusView />}
      {activeTab === 'Typography' && <TypographyView />}
      {activeTab === 'Colors' && <ColorsView />}
      {activeTab === 'Component Tokens' && <ComponentTokensView />}
    </Panel>
  );
};
