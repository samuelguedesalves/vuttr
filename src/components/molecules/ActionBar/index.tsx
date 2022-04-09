import React, { useEffect, useState } from 'react';

import { PrimitiveAtom, useAtom } from 'jotai';
import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';
import { Input } from '../../atoms/Input';

import { Styles } from './styles';

import searchIcon from '../../../assets/search-icon.svg';
import addIcon from '../../../assets/add-icon.svg';

type ActionBarProps = {
  isOpenAddNewToolModalAtom: PrimitiveAtom<boolean>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchInTagsOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  isOpenAddNewToolModalAtom,
  setSearchQuery,
  setSearchInTagsOnly,
}) => {
  const [
    isOpenAddNewToolModal,
    setIsOpenAddNewToolModal,
  ] = useAtom(isOpenAddNewToolModalAtom);

  const [query, setQuery] = useState<string>('');
  const [applyOnlyAtTags, setApplyOnlyAtTags] = useState<boolean>(false);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    setSearchInTagsOnly(applyOnlyAtTags);
  }, [applyOnlyAtTags]);

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleCheckbox(value: boolean) {
    setApplyOnlyAtTags(value);
  }

  function handleRequestToOpenModal() {
    setIsOpenAddNewToolModal(() => true);
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
        onClick={handleRequestToOpenModal}
      />
    </Styles.Container>
  );
};
