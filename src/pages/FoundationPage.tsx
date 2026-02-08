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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <section>
        <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', marginTop: 0 }}>
          Color Tokens
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)', marginTop: 0, marginBottom: 0 }}>
          Color scales, semantic tokens, and state layers for consistent color usage across the design system.
        </p>
      </section>

      {/* Color Scales */}
      <section>
        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', marginTop: 0, color: 'rgba(0,0,0,0.9)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Color Scales
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            {
              title: 'Grey',
              tokens: [
                { name: 'white', value: '#FFFFFF' },
                { name: 'grey-10', value: '#FFFFFF' },
                { name: 'grey-20', value: '#F7F7F7' },
                { name: 'grey-30', value: '#EDEDED' },
                { name: 'grey-40', value: '#DBDBDB' },
                { name: 'grey-50', value: '#BABABA' },
                { name: 'grey-60', value: '#8F8F8F' },
                { name: 'grey-70', value: '#6B6B6B' },
                { name: 'grey-80', value: '#4D4D4D' },
                { name: 'grey-90', value: '#333333' },
                { name: 'grey-100', value: '#141414' },
                { name: 'black', value: '#000000' },
              ],
            },
            {
              title: 'Blue',
              tokens: [
                { name: 'blue-10', value: '#EDF4FF' },
                { name: 'blue-20', value: '#CCE0FF' },
                { name: 'blue-30', value: '#99C2FF' },
                { name: 'blue-40', value: '#61A1FF' },
                { name: 'blue-50', value: '#3B8AFF' },
                { name: 'blue-60', value: '#2170F0' },
                { name: 'blue-70', value: '#1959C7' },
                { name: 'blue-80', value: '#134699' },
                { name: 'blue-90', value: '#0D2E6B' },
                { name: 'blue-100', value: '#081D47' },
              ],
            },
            {
              title: 'Green',
              tokens: [
                { name: 'green-10', value: '#EEFAF3' },
                { name: 'green-20', value: '#C7F0DB' },
                { name: 'green-30', value: '#94DEB9' },
                { name: 'green-40', value: '#61C796' },
                { name: 'green-50', value: '#42B081' },
                { name: 'green-60', value: '#2E976E' },
                { name: 'green-70', value: '#217D5C' },
                { name: 'green-80', value: '#175F47' },
                { name: 'green-90', value: '#0F4333' },
                { name: 'green-100', value: '#092B21' },
              ],
            },
            {
              title: 'Red',
              tokens: [
                { name: 'red-10', value: '#FFF0F0' },
                { name: 'red-20', value: '#FFD1D1' },
                { name: 'red-30', value: '#FFA3A3' },
                { name: 'red-40', value: '#F56F6F' },
                { name: 'red-50', value: '#E64D4D' },
                { name: 'red-60', value: '#CC3333' },
                { name: 'red-70', value: '#A32929' },
                { name: 'red-80', value: '#7D1F1F' },
                { name: 'red-90', value: '#571414' },
                { name: 'red-100', value: '#380D0D' },
              ],
            },
            {
              title: 'Yellow',
              tokens: [
                { name: 'yellow-10', value: '#FFF9EB' },
                { name: 'yellow-20', value: '#FFF0C7' },
                { name: 'yellow-30', value: '#FFE191' },
                { name: 'yellow-40', value: '#FAD05C' },
                { name: 'yellow-50', value: '#F3B538' },
                { name: 'yellow-60', value: '#E09E1F' },
                { name: 'yellow-70', value: '#B87F17' },
                { name: 'yellow-80', value: '#896111' },
                { name: 'yellow-90', value: '#61440C' },
                { name: 'yellow-100', value: '#402E07' },
              ],
            },
          ].map((scale) => (
            <div key={scale.title}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '12px',
                color: 'rgba(0,0,0,0.8)',
              }}>
                {scale.title}
              </div>

              {/* Color swatches in a horizontal row */}
              <div style={{
                display: 'flex',
                gap: '0',
                marginBottom: '12px',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                {scale.tokens.map((token, idx) => (
                  <div
                    key={token.name}
                    style={{
                      flex: 1,
                      height: '64px',
                      backgroundColor: token.value,
                      borderRight: idx < scale.tokens.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                      position: 'relative',
                      cursor: 'default',
                    }}
                    title={`${token.name}: ${token.value}`}
                  />
                ))}
              </div>

              {/* Token details table */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${scale.tokens.length}, 1fr)`,
                gap: '8px',
                fontSize: '11px',
              }}>
                {scale.tokens.map((token) => (
                  <div key={token.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      color: 'rgba(0,0,0,0.9)',
                      fontWeight: '500',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {token.name}
                    </div>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      color: 'rgba(0,0,0,0.5)',
                    }}>
                      {token.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Tokens */}
      <section>
        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', marginTop: 0, color: 'rgba(0,0,0,0.9)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Semantic Tokens
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto 1fr',
          gap: '12px 24px',
          alignItems: 'center',
        }}>
          {[
            { category: 'Foreground', tokens: [
              { name: 'foreground-inverseprimary', value: '#000000' },
              { name: 'foreground-secondary', value: '#F7F7F7' },
              { name: 'foreground-inversetertiary', value: '#8F8F8F' },
              { name: 'foreground-disabled', value: '#BABABA' },
            ]},
            { category: 'Background', tokens: [
              { name: 'background-primary', value: '#000000' },
              { name: 'background-disabled', value: '#EDEDED' },
            ]},
            { category: 'Border & Fill', tokens: [
              { name: 'border-selected', value: '#000000' },
              { name: 'fill-content', value: '#000000' },
              { name: 'fill-contentdisabled', value: '#BABABA' },
            ]},
            { category: 'Semantic', tokens: [
              { name: 'semantic-error', value: '#CC3333' },
              { name: 'semantic-success', value: '#2E976E' },
              { name: 'semantic-warning', value: '#E09E1F' },
            ]},
          ].map((group) => (
            <React.Fragment key={group.category}>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: 'rgba(0,0,0,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                gridColumn: '1 / -1',
                marginTop: group.category !== 'Foreground' ? '16px' : '0',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}>
                {group.category}
              </div>
              {group.tokens.map((token) => (
                <React.Fragment key={token.name}>
                  <div style={{
                    width: '48px',
                    height: '32px',
                    backgroundColor: token.value,
                    borderRadius: '4px',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }} />
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: 'rgba(0,0,0,0.9)',
                    fontWeight: '500',
                  }}>
                    {token.name}
                  </div>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: 'rgba(0,0,0,0.5)',
                  }}>
                    {token.value}
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* State Layers */}
      <section>
        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', marginTop: 0, color: 'rgba(0,0,0,0.9)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          State Layers
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '12px 24px',
          alignItems: 'center',
          maxWidth: '600px',
        }}>
          {[
            { name: 'state-layer-on-surface-hovered-opacity', value: '0.04', description: 'Hover state opacity' },
            { name: 'state-layer-on-surface-pressed-opacity', value: '0.12', description: 'Pressed state opacity' },
          ].map((token) => (
            <React.Fragment key={token.name}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'rgba(0,0,0,0.9)',
                fontWeight: '500',
              }}>
                {token.name}
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'rgba(0,0,0,0.5)',
                }}>
                  {token.value}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(0,0,0,0.6)',
                  fontStyle: 'italic',
                }}>
                  {token.description}
                </div>
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
