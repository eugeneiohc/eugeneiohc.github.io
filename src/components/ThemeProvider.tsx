import React, { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme, Global, css } from '@emotion/react';
import { theme } from '../theme';

export const useTheme = () => useEmotionTheme() as typeof theme;

export const ThemeProvider: FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        body {
          padding: 0;
          margin: 0;
        }
        body * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 0;
        }
      `}
    />
    {children}
  </EmotionThemeProvider>
);
