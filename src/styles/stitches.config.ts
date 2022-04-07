import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      dark: '#170C3A',

      blue: '#365DF0',

      gray50: '#F5F4F6',
      gray100: '#EFEEF0',
      gray200: '#B1ADB9',
      gray300: '#8F8A9B',
    },
    fonts: {
      heading: '"PT Mono"',
      text: '"Source Sans Pro"',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
});
