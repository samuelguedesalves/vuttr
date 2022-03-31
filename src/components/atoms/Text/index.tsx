import React from 'react';
import { Styles } from './styled';

type TextProps = {
  style?: React.CSSProperties;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  style,
  className,
}) => (
  <Styles.Paragraph className={className} style={style}>
    {children}
  </Styles.Paragraph>
);
