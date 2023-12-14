import type { Preview } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
