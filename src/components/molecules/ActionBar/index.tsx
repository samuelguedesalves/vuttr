import React, { useState } from 'react';

import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';
import { Input } from '../../atoms/Input';

import { Styles } from './styles';

import searchIcon from '../../../assets/search-icon.svg';
import addIcon from '../../../assets/add-icon.svg';

export const ActionBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [applyOnlyAtTags, setApplyOnlyAtTags] = useState<boolean>(false);

  console.log(applyOnlyAtTags);

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleCheckbox(value: boolean) {
    setApplyOnlyAtTags(value);
  }

  function handleClickOnButton() {
    console.log('here we call modal to add a new tool');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Styles.Container>
      <form
        className="search-box"
        onSubmit={handleSubmit}
      >
        <Input
          className="search-input"
          icon={searchIcon}
          placeholder="Search..."
          onChange={handleSearchInput}
          value={query}
        />

        <Checkbox
          label="Search in tags only"
          handleChecked={handleCheckbox}
        />
      </form>

      <Button
        textButton="Add"
        icon={addIcon}
        onClick={handleClickOnButton}
      />
    </Styles.Container>
  );
};
