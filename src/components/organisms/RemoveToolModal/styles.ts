import { styled } from '../../../styles/stitches.config';

export const Container = styled('div', {
  header: {
    marginBottom: 20,

    '& strong': {
      fontWeight: 'bold',
      fontSize: 26,
      color: '$dark',
      lineHeight: '100%',
    },
  },

  'main .description': {
    fontSize: 22,
    fontWeight: 'normal',

    strong: {
      fontWeight: 'bold',
    },
  },

  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    columnGap: 20,
    marginTop: 20,
  },

  'footer button': {
    minWidth: 125,
    height: 50,
    fontSize: 18,
    fontWeight: 'normal',
    border: 'none',
    borderRadius: 8,

    '&.cancel': {
      color: '$blue',
      background: '$gray100',
    },

    '&.remove': {
      border: 'none',
      color: '$white',
      borderRadius: 8,
      background: '$blue',
    },
  },
});
