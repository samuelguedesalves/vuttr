import React, { useState } from 'react';
import { atom } from 'jotai';

import { AddNewToolModal } from './components/organisms/AddNewToolModal';
import { Header } from './components/organisms/Header';
import { ItemsList } from './components/organisms/ItemsList';
import { globalStyles } from './styles/global';
import { ToolsContextProvider } from './hooks/tools';

const App: React.FC = () => {
  const isOpenAddNewToolModalAtom = atom<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchInTagsOnly, setSearchInTagsOnly] = useState<boolean>(false);

  globalStyles();

  return (
    <div className="App">
      <ToolsContextProvider>
        <Header
          setSearchQuery={setSearchQuery}
          isOpenAddNewToolModalAtom={isOpenAddNewToolModalAtom}
          setSearchInTagsOnly={setSearchInTagsOnly}
        />
        <ItemsList />

        <AddNewToolModal
          isOpenAddNewToolModalAtom={isOpenAddNewToolModalAtom}
        />
      </ToolsContextProvider>
    </div>
  );
};

export default App;
