import React from 'react';
import { Styles } from './styles';

type HeadingProps = {
  style?: React.CSSProperties;
}

export const Heading: React.FC<HeadingProps> = ({ children, style }) => (
  <Styles.H1 style={style}>
    {children}
  </Styles.H1>
);
