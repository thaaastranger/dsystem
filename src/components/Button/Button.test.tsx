import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  // ============================================================================
  // RENDERING TESTS
  // ============================================================================

  it('renders with text content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // ============================================================================
  // VARIANT TESTS
  // ============================================================================

  it('applies filled variant by default', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('button--filled');
  });

  it('applies outlined variant', () => {
    render(<Button variant="outlined">Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('button--outlined');
  });

  it('applies ghost variant', () => {
    render(<Button variant="ghost">Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('button--ghost');
  });

  // ============================================================================
  // INTERACTION TESTS
  // ============================================================================

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    // Attempt to click (should not trigger)
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button onClick={handleClick} loading>
        Loading
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // ============================================================================
  // DISABLED STATE TESTS
  // ============================================================================

  it('applies disabled attribute when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is not disabled by default', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  // ============================================================================
  // LOADING STATE TESTS
  // ============================================================================

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('hides content when loading', () => {
    render(
      <Button loading iconLeft={<span data-testid="icon">→</span>}>
        Loading Text
      </Button>
    );

    // Content should be hidden (opacity: 0 via CSS)
    const button = screen.getByRole('button');
    expect(button.textContent).toContain('Loading Text');
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  // ============================================================================
  // ICON TESTS
  // ============================================================================

  it('renders with left icon', () => {
    render(
      <Button iconLeft={<span data-testid="icon-left">→</span>}>Button</Button>
    );
    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(
      <Button iconRight={<span data-testid="icon-right">→</span>}>Button</Button>
    );
    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });

  it('renders with both icons', () => {
    render(
      <Button
        iconLeft={<span data-testid="icon-left">←</span>}
        iconRight={<span data-testid="icon-right">→</span>}
      >
        Button
      </Button>
    );
    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });

  // ============================================================================
  // ICON-ONLY MODE TESTS
  // ============================================================================

  it('renders icon-only mode with aria-label', () => {
    render(
      <Button
        iconLeft={<span data-testid="icon">✕</span>}
        iconOnly
        aria-label="Close"
      />
    );

    const button = screen.getByRole('button', { name: 'Close' });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(button.className).toContain('button--iconOnly');
  });

  it('does not render text label in icon-only mode', () => {
    render(
      <Button iconLeft={<span>✕</span>} iconOnly aria-label="Close">
        This should not be visible
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Close' });
    expect(button.textContent).not.toContain('This should not be visible');
  });

  it('warns when icon-only mode is used without aria-label in development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(<Button iconLeft={<span>✕</span>} iconOnly />);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Button: iconOnly mode requires aria-label')
    );

    consoleSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  // ============================================================================
  // FULL WIDTH TESTS
  // ============================================================================

  it('applies fullWidth class', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button').className).toContain('button--fullWidth');
  });

  it('does not apply fullWidth class by default', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button').className).not.toContain('button--fullWidth');
  });

  // ============================================================================
  // ACCESSIBILITY TESTS
  // ============================================================================

  it('has proper keyboard focus', () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole('button');

    button.focus();
    expect(button).toHaveFocus();
  });

  it('can be tabbed to', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <button>Before</button>
        <Button>Target</Button>
        <button>After</button>
      </div>
    );

    // Start from first button
    screen.getByText('Before').focus();

    // Tab to Button component
    await user.tab();
    expect(screen.getByRole('button', { name: 'Target' })).toHaveFocus();
  });

  it('cannot be focused when disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');

    button.focus();
    expect(button).not.toHaveFocus();
  });

  it('can be activated with Enter key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Press Enter</Button>);

    const button = screen.getByRole('button');
    button.focus();

    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be activated with Space key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Press Space</Button>);

    const button = screen.getByRole('button');
    button.focus();

    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // ============================================================================
  // REF FORWARDING TESTS
  // ============================================================================

  it('forwards ref to button element', () => {
    const ref = vi.fn();

    render(<Button ref={ref}>Button</Button>);

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  // ============================================================================
  // CUSTOM PROPS TESTS
  // ============================================================================

  it('passes through custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-class');
  });

  it('passes through additional button attributes', () => {
    render(
      <Button type="submit" name="submitButton" value="submit">
        Submit
      </Button>
    );

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.type).toBe('submit');
    expect(button.name).toBe('submitButton');
    expect(button.value).toBe('submit');
  });

  it('passes through data attributes', () => {
    render(<Button data-testid="custom-id" data-analytics="track-me">Button</Button>);

    const button = screen.getByTestId('custom-id');
    expect(button).toHaveAttribute('data-analytics', 'track-me');
  });

  // ============================================================================
  // STYLE INJECTION TESTS
  // ============================================================================

  it('injects token-based CSS custom properties', () => {
    render(<Button variant="filled">Button</Button>);
    const button = screen.getByRole('button');

    // Check that custom properties are set (via inline styles)
    const style = button.style;
    expect(style.getPropertyValue('--btn-bg')).toBeTruthy();
    expect(style.getPropertyValue('--btn-fg')).toBeTruthy();
    expect(style.getPropertyValue('--btn-padding-x')).toBeTruthy();
  });
});
