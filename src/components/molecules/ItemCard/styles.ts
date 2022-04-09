import { styled } from '../../../styles/stitches.config';

export const Container = styled('section', {
  width: '100%',
  height: 124,

  padding: 18,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '$gray200',
  borderRadius: 6,

  position: 'relative',

  'button.button-remove-item': {
    border: 0,

    background: 'transparent',
    color: '$gray300',

    fontFamily: '$text',
    fontWeight: 'normal',
    fontSize: 18,

    position: 'absolute',
    top: 18,
    right: 18,

    display: 'inline-block',
    lineHeight: '100%',
  },

  'header a': {
    fontWeight: 'normal',
    fontFamily: '$text',
    fontSize: 22,
    lineHeight: '100%',
    color: '$dark',
    display: 'inline-block',
    marginBottom: 8,
    textDecoration: 'none',

    position: 'relative',

    cursor: 'pointer',

    transition: 'all 1s ease',

    '&:before': {
      content: '',
      position: 'absolute',
      bottom: -2,

      width: '100%',
      height: 2,
      borderRadius: 2,
      background: '$blue',

      opacity: 0,
    },

    '&:hover:before': {
      opacity: 1,
    },
  },

  'header p': {
    fontSize: 18,
    fontFamily: '$text',
    fontWeight: 'normal',
    color: '$dark',
  },

  '.hashtags': {
    width: '100%',
    display: 'flex',
    columnGap: 12,

    marginTop: 12,
  },

  '.hashtags span': {
    display: 'inline-block',
    fontFamily: '$text',
    fontWeight: 'bold',
    color: '$gray300',
    fontSize: 16,
    lineHeight: '100%',
  },
});
