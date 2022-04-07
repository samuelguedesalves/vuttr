import React, { useState } from 'react';
import { Styles } from './styles';

type CheckboxProps = {
  label: string;
  handleChecked?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  handleChecked,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    setIsChecked(checked);

    if (handleChecked) {
      handleChecked(checked);
    }
  }

  return (
    <Styles.Label>
      <Styles.Input
        className={isChecked ? 'active' : ''}
        type="checkbox"
        onChange={handleOnChange}
      />

      {label}
    </Styles.Label>
  );
};
