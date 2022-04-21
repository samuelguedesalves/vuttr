import { styled } from '../../../styles/stitches.config';

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  '.search-box': {
    display: 'flex',

    '.search-input': {
      marginRight: 12,
    },
  },
});

export const Styles = {
  Container,
};
