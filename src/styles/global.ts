import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  'html, body': {
    margin: 0,
    padding: 0,
  },
});
