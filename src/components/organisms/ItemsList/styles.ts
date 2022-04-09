import { styled } from '../../../styles/stitches.config';

export const Container = styled('main', {
  width: '100%',
});

export const Content = styled('div', {
  width: '100%',
  maxWidth: 772,

  margin: '0 auto',

  paddingInline: 12,

  marginBottom: 24,

  '& section + section': {
    marginTop: 22,
  },
});
