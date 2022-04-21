import React from 'react';
import { Styles } from './styles';

type ButtonProps = {
  textButton: string;
  icon?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  textButton,
  onClick,
}) => (
  <Styles.Button onClick={onClick}>
    <img src={icon} alt="Adicionar" />
    {textButton}
  </Styles.Button>
);
