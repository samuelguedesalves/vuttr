import React from 'react';

import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';
import { Input } from '../../atoms/Input';

import { Styles } from './styles';

import searchIcon from '../../../assets/search-icon.svg';
import addIcon from '../../../assets/add-icon.svg';

import { useModal } from '../../../hooks/modal';
import { useSearch } from '../../../hooks/search';

export const ActionBar: React.FC = () => {
  const { openModal } = useModal();
  const { searchQuery, setSearchQuery, setSearchOnlyInTags } = useSearch();

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleCheckbox(value: boolean) {
    setSearchOnlyInTags(value);
  }

  function handleRequestToOpenModal() {
    openModal();
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
          value={searchQuery}
        />

        <Checkbox
          label="Search in tags only"
          handleChecked={handleCheckbox}
        />
      </form>

      <Button
        textButton="Add"
        icon={addIcon}
        onClick={handleRequestToOpenModal}
      />
    </Styles.Container>
  );
};
