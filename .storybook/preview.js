import React from 'react';
import { addDecorator } from '@storybook/react'
import { themeProvider } from "../src/theme"
import theme from "../src/theme"
import { ThemeProvider } from 'styled-components';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

