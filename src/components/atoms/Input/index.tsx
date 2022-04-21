import React from 'react';
import { Styles } from './styles';

type InputProps = {
  icon?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  className?: string;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  style,
  icon,
  className,
  value,
  onChange: handleOnChange,
}) => (
  <Styles.Container className={className}>
    {
      icon && (
        <Styles.IconContainer>
          <img src={icon} alt="Pesquisar" />
        </Styles.IconContainer>
      )
    }

    <Styles.Input
      placeholder={placeholder || 'type here'}
      style={{ ...style, ...(icon && { paddingLeft: 48 }) }}
      onChange={handleOnChange}
      defaultValue={value}
    />
  </Styles.Container>
);
