import { styled } from '../../../styles/stitches.config';

export const Container = styled('div', {
  width: '100%',
  height: '100%',
});

export const Content = styled('div', {
  width: '100%',
  maxWidth: 772,
  margin: '0 auto',
  paddingInline: 12,
  paddingBlock: 42,

  '.subtitle': {
    marginBottom: 20,
  },
});
