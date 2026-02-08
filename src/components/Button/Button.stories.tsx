import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Button component stories
 * Showcases all variants, states, and features with token-driven styling
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Token-driven button component with 1:1 Figma fidelity. All styling values derive from design tokens with zero hard-coded values.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual variant of the button',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width of container',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only mode (requires aria-label)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ============================================================================
// FILLED VARIANT
// ============================================================================

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
};

export const FilledHover: Story = {
  args: {
    variant: 'filled',
    children: 'Hover State',
  },
  parameters: {
    pseudo: { hover: true },
    docs: {
      description: {
        story: 'Hover state with onDark state layer overlay (rgba(255,255,255,0.16))',
      },
    },
  },
};

export const FilledPressed: Story = {
  args: {
    variant: 'filled',
    children: 'Pressed State',
  },
  parameters: {
    pseudo: { active: true },
    docs: {
      description: {
        story: 'Pressed state with onDark state layer overlay (rgba(255,255,255,0.24))',
      },
    },
  },
};

export const FilledDisabled: Story = {
  args: {
    variant: 'filled',
    children: 'Disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state uses button.background.disabled and button.foreground.disabled tokens',
      },
    },
  },
};

export const FilledLoading: Story = {
  args: {
    variant: 'filled',
    children: 'Loading',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state shows spinner and prevents interaction',
      },
    },
  },
};

// ============================================================================
// OUTLINED VARIANT
// ============================================================================

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const OutlinedHover: Story = {
  args: {
    variant: 'outlined',
    children: 'Hover State',
  },
  parameters: {
    pseudo: { hover: true },
    docs: {
      description: {
        story: 'Hover state with onLight state layer overlay (rgba(0,0,0,0.04))',
      },
    },
  },
};

export const OutlinedPressed: Story = {
  args: {
    variant: 'outlined',
    children: 'Pressed State',
  },
  parameters: {
    pseudo: { active: true },
    docs: {
      description: {
        story: 'Pressed state with onLight state layer overlay (rgba(0,0,0,0.12))',
      },
    },
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    children: 'Disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled outlined button with transparent background and disabled border/text',
      },
    },
  },
};

export const OutlinedLoading: Story = {
  args: {
    variant: 'outlined',
    children: 'Loading',
    loading: true,
  },
};

// ============================================================================
// GHOST VARIANT
// ============================================================================

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const GhostHover: Story = {
  args: {
    variant: 'ghost',
    children: 'Hover State',
  },
  parameters: {
    pseudo: { hover: true },
    docs: {
      description: {
        story: 'Hover state with onLight state layer overlay (rgba(0,0,0,0.04))',
      },
    },
  },
};

export const GhostPressed: Story = {
  args: {
    variant: 'ghost',
    children: 'Pressed State',
  },
  parameters: {
    pseudo: { active: true },
    docs: {
      description: {
        story: 'Pressed state with onLight state layer overlay (rgba(0,0,0,0.12))',
      },
    },
  },
};

export const GhostDisabled: Story = {
  args: {
    variant: 'ghost',
    children: 'Disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled ghost button - minimal style with disabled text color',
      },
    },
  },
};

export const GhostLoading: Story = {
  args: {
    variant: 'ghost',
    children: 'Loading',
    loading: true,
  },
};

// ============================================================================
// WITH ICONS
// ============================================================================

const SampleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1L10.5 6.5L16 7L12 11L13 16L8 13L3 16L4 11L0 7L5.5 6.5L8 1Z"
      fill="currentColor"
    />
  </svg>
);

export const WithIconLeft: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    iconLeft: <SampleIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with icon positioned to the left of text',
      },
    },
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
    iconRight: <SampleIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with icon positioned to the right of text',
      },
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
    iconLeft: <SampleIcon />,
    iconRight: <SampleIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with icons on both sides',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    iconLeft: <SampleIcon />,
    iconOnly: true,
    'aria-label': 'Favorite',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button (requires aria-label for accessibility)',
      },
    },
  },
};

// ============================================================================
// FULL WIDTH
// ============================================================================

export const FullWidth: Story = {
  args: {
    variant: 'filled',
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Button that takes full width of its container',
      },
    },
  },
};

// ============================================================================
// ALL VARIANTS COMPARISON
// ============================================================================

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all button variants',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Filled:</span>
        <Button variant="filled">Default</Button>
        <Button variant="filled" disabled>
          Disabled
        </Button>
        <Button variant="filled" loading>
          Loading
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Outlined:</span>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" loading>
          Loading
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ width: '100px' }}>Ghost:</span>
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
        <Button variant="ghost" loading>
          Loading
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive view of all variants in all states',
      },
    },
  },
};
