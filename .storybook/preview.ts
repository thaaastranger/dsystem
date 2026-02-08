import type { Preview } from '@storybook/react';
import '../src/tokens/tokens.css'; // Import design tokens

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'grey',
          value: '#f7f7f7',
        },
      ],
    },
  },
};

export default preview;
