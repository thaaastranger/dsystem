import React from 'react';
import { Button } from './components/Button';
import { Panel } from './components/Panel';
import './tokens/tokens.css';
import './App.css';

/**
 * Design System App
 * Showcases Button component with Figma panel layout
 */

// Icon components
const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 6V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="13.5" r="0.75" fill="currentColor" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 2L12.5 8L18 9L14 13L15 19L10 16L5 19L6 13L2 9L7.5 8L10 2Z"
      fill="currentColor"
    />
  </svg>
);

function App() {
  return (
    <Panel
      title="Button Component"
      breadcrumb={['Components', 'Button']}
    >
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
              <Button variant="filled" iconLeft={<ErrorIcon />} iconRight={<ErrorIcon />}>
                Label
              </Button>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Outlined</p>
              <Button variant="outlined" iconLeft={<ErrorIcon />} iconRight={<ErrorIcon />}>
                Label
              </Button>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Ghost (Text Only)</p>
              <Button variant="ghost" iconLeft={<ErrorIcon />} iconRight={<ErrorIcon />}>
                Label
              </Button>
            </div>

            {/* Row 2: Disabled State */}
            <div>
              <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
              <Button variant="filled" iconLeft={<ErrorIcon />} iconRight={<ErrorIcon />} disabled>
                Label
              </Button>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
              <Button variant="outlined" iconLeft={<ErrorIcon />} iconRight={<ErrorIcon />} disabled>
                Label
              </Button>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '12px' }}>Disabled</p>
              <Button variant="ghost" iconLeft={<ErrorIcon />} iconRight={<ErrorIcon />} disabled>
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
            <Button variant="filled" iconLeft={<StarIcon />}>
              Icon Left
            </Button>
            <Button variant="outlined" iconRight={<StarIcon />}>
              Icon Right
            </Button>
            <Button variant="ghost" iconLeft={<StarIcon />} iconRight={<StarIcon />}>
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
    </Panel>
  );
}

export default App;
