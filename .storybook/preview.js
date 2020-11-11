import React from 'react';
import { ThemeProvider } from '@material-ui/core';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  // Theme provider decorator.
  (Story) => (
    <ThemeProvider>
      <Story></Story>
    </ThemeProvider>
  ),
];
