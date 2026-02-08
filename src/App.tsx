import React from 'react';
import { Button } from './components/Button';
import { Panel } from './components/Panel';
import './tokens/tokens.css';
import './App.css';

/**
 * Demo App - Test Environment for Design System Components
 */
function App() {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleAsyncAction = () => {
    setLoading(true);
    setTimeout(() => {
      setCount((c) => c + 1);
      setLoading(false);
    }, 2000);
  };

  // Sample icon component
  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1L10.5 6.5L16 7L12 11L13 16L8 13L3 16L4 11L0 7L5.5 6.5L8 1Z"
        fill="currentColor"
      />
    </svg>
  );

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1V15M1 8H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="app">
      <div className="app-header">
        <h1>Design System Test Environment</h1>
        <p>Token-driven components with 1:1 Figma fidelity</p>
      </div>

      <div className="app-content">
        {/* Button Variants Panel */}
        <Panel
          title="Button Variants"
          description="Three button styles with different visual weights"
          variant="elevated"
        >
          <div className="button-group">
            <Button variant="filled" onClick={() => setCount(count + 1)}>
              Filled Button
            </Button>
            <Button variant="outlined" onClick={() => setCount(count + 1)}>
              Outlined Button
            </Button>
            <Button variant="ghost" onClick={() => setCount(count + 1)}>
              Ghost Button
            </Button>
          </div>
          <div className="info-box">
            <span>Button clicks: {count}</span>
          </div>
        </Panel>

        {/* Button States Panel */}
        <Panel
          title="Button States"
          description="Interactive states and loading behavior"
          variant="outlined"
        >
          <div className="button-group">
            <Button variant="filled">Default</Button>
            <Button variant="filled" disabled>
              Disabled
            </Button>
            <Button variant="filled" loading={loading} onClick={handleAsyncAction}>
              {loading ? 'Loading...' : 'Async Action'}
            </Button>
          </div>
          <div className="button-group">
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" loading={loading}>
              Loading
            </Button>
          </div>
          <div className="button-group">
            <Button variant="ghost">Default</Button>
            <Button variant="ghost" disabled>
              Disabled
            </Button>
            <Button variant="ghost" loading={loading}>
              Loading
            </Button>
          </div>
        </Panel>

        {/* Buttons with Icons Panel */}
        <Panel
          title="Buttons with Icons"
          description="Icon positioning and icon-only mode"
          variant="default"
        >
          <div className="button-group">
            <Button variant="filled" iconLeft={<StarIcon />}>
              Icon Left
            </Button>
            <Button variant="outlined" iconRight={<StarIcon />}>
              Icon Right
            </Button>
            <Button
              variant="ghost"
              iconLeft={<StarIcon />}
              iconRight={<PlusIcon />}
            >
              Both Icons
            </Button>
          </div>
          <div className="button-group">
            <Button
              variant="filled"
              iconOnly
              iconLeft={<StarIcon />}
              aria-label="Favorite"
            />
            <Button
              variant="outlined"
              iconOnly
              iconLeft={<PlusIcon />}
              aria-label="Add"
            />
            <Button
              variant="ghost"
              iconOnly
              iconLeft={<StarIcon />}
              aria-label="Star"
            />
          </div>
        </Panel>

        {/* Full Width Buttons Panel */}
        <Panel
          title="Full Width Buttons"
          description="Buttons that span the full container width"
          variant="outlined"
        >
          <Button variant="filled" fullWidth>
            Primary Action
          </Button>
          <Button variant="outlined" fullWidth>
            Secondary Action
          </Button>
          <Button variant="ghost" fullWidth>
            Tertiary Action
          </Button>
        </Panel>

        {/* Interactive Demo Panel */}
        <Panel
          title="Interactive Demo"
          description="Try out the buttons with real interactions"
          variant="elevated"
        >
          <div className="demo-section">
            <p className="demo-label">Counter: {count}</p>
            <div className="button-group">
              <Button
                variant="filled"
                iconLeft={<PlusIcon />}
                onClick={() => setCount(count + 1)}
              >
                Increment
              </Button>
              <Button
                variant="outlined"
                onClick={() => setCount(Math.max(0, count - 1))}
              >
                Decrement
              </Button>
              <Button variant="ghost" onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </div>

          <div className="demo-section">
            <p className="demo-label">Async Operation</p>
            <div className="button-group">
              <Button
                variant="filled"
                loading={loading}
                onClick={handleAsyncAction}
              >
                {loading ? 'Processing...' : 'Start Process'}
              </Button>
              <Button
                variant="outlined"
                disabled={loading}
                onClick={() => {
                  setLoading(false);
                  setCount(0);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Panel>
      </div>

      <footer className="app-footer">
        <p>
          Built with <strong>@dsystem/components</strong> • Zero hard-coded
          values • Token-driven architecture
        </p>
      </footer>
    </div>
  );
}

export default App;
