import { styled } from '../../../styles/stitches.config';

const Input = styled('input', {
  height: 52,
  padding: 12,

  fontFamily: '$text',
  fontSize: 24,
  fontWeight: 'normal',

  background: '$gray50',
  color: '$dark',

  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '$gray100',
  borderRadius: 8,

  lineHeight: '100%',
});

const Container = styled('div', {
  width: 'fit-content',
  height: '100%',

  position: 'relative',
});

const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  img: {
    width: 25,
    height: 25,
  },

  paddingLeft: 14,

  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
});

export const Styles = {
  Input,
  Container,
  IconContainer,
};
