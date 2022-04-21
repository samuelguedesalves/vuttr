import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

type SearchContextProps = {
  searchQuery: string;
  searchOnlyInTags: boolean;
  setSearchQuery: (value: string) => void;
  setSearchOnlyInTags: (value: boolean) => void;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps,
);

export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchOnlyInTags, setSearchOnlyInTags] = useState<boolean>(false);

  return (
    <SearchContext.Provider
      value={useMemo(() => ({
        searchQuery,
        searchOnlyInTags,
        setSearchQuery,
        setSearchOnlyInTags,
      }), [searchQuery, searchOnlyInTags])}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
