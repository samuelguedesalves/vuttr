import { transparentize } from 'polished';
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

  body: {
    background: '$white',
  },

  'body, input, textarea, button': {
    fontFamily: '$text',
    fontWeight: 'normal',
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 'bold',
  },

  button: {
    cursor: 'pointer',
  },

  '.react-modal-overlay': {
    position: 'fixed',
    width: '100%',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,

    background: transparentize(0.6, '#170C3A'),

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.react-modal-content': {
    width: '100%',
    maxWidth: 600,
    background: '$white',

    padding: 30,
    borderRadius: 6,

    position: 'relative',
  },

  '.react-modal-content button[type="button"].close-modal-button': {
    position: 'absolute',
    width: 14,
    height: 14,
    top: 30,
    right: 30,

    background: 'transparent',
    border: 'transparent',

    transition: 'filter 0.2s',

    img: {
      width: 14,
      height: 14,
    },

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },

});
