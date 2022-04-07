import { styled } from '../../../styles/stitches.config';
import checkImg from '../../../assets/check-icon.svg';

const Label = styled('label', {
  fontSize: 24,
  fontWeight: 'normal',
  fontFamily: '$text',

  display: 'flex',
  alignItems: 'center',
  lineHeight: '100%',

  columnGap: 6,
  cursor: 'pointer',
});

const Box = styled('div', {
  width: 25,
  height: 25,
  borderRadius: 4,
});

const Input = styled('input', {
  appearance: 'none',
  cursor: 'pointer',

  '&:before': {
    display: 'block',
    content: '',
    width: 25,
    height: 25,
    borderStyle: 'solid',
    borderColor: '$blue',
    borderWidth: 2,
    borderRadius: 4,
  },

  '&.active:before': {
    backgroundColor: '$blue',
    backgroundSize: '90%',
    backgroundPosition: 'center',
    backgroundImage: `url("${checkImg}")`,
    backgroundRepeat: 'no-repeat',
  },
});

export const Styles = {
  Box,
  Input,
  Label,
};
