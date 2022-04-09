import { styled } from '../../../styles/stitches.config';

export const Container = styled('div', {
  header: {
    marginBottom: 20,
  },

  'header strong': {
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: 22,
    color: '$dark',
    lineHeight: '100%',
  },

  label: {
    display: 'block',

    fontSize: 18,
    fontWeight: 'bold',
    color: '$dark',

    lineHeight: '100%',

    '& + label': {
      marginTop: 20,
    },
  },

  'label input, textarea': {
    display: 'block',
    width: '100%',
  },

  'label input': {
    height: 45,

    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '$gray100',
    background: '$gray50',
    borderRadius: 6,

    color: '$dark',

    paddingInline: 24,
    fontSize: 18,

    marginTop: 8,

    '&::placeholder': {
      color: '$gray200',
    },
  },

  'label textarea': {
    height: 85,

    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '$gray100',
    background: '$gray50',
    borderRadius: 6,

    color: '$dark',

    paddingInline: 24,
    paddingBlock: 15,
    fontSize: 18,

    marginTop: 12,

    resize: 'none',

    '&::placeholder': {
      color: '$gray200',
    },
  },

  footer: {
    marginTop: 24,

    display: 'flex',
    justifyContent: 'end',
  },

  'footer button': {
    minWidth: 170,
    height: 45,
    fontWeight: 'normal',
    background: '$blue',
    border: 0,
    borderRadius: 6,
    color: '$white',
    fontSize: 18,
  },
});
