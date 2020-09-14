import React from 'react';
import { addDecorator, addParameters } from '@storybook/react'
import { themeProvider } from "../src/theme"
import theme from "../src/theme"
import { ThemeProvider } from 'styled-components';
// import "../story.css";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

addParameters({
  options: {
    showRoots: true,
  }
})

