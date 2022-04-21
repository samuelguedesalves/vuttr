import { styled } from '../../../styles/stitches.config';

const Button = styled('button', {
  width: 'fit-content',
  minWidth: '150px',
  height: 52,

  fontSize: 24,
  lineHeight: '100%',

  background: '$blue',
  color: '$white',
  border: 'transparent',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: 12,

  cursor: 'pointer',
});

export const Styles = {
  Button,
};
