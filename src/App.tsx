import React from 'react';

import { AddNewToolModal } from './components/organisms/AddNewToolModal';
import { Header } from './components/organisms/Header';
import { ItemsList } from './components/organisms/ItemsList';
import { globalStyles } from './styles/global';
import { ToolsContextProvider } from './hooks/tools';
import { ModalProvider } from './hooks/modal';
import { SearchContextProvider } from './hooks/search';

const App: React.FC = () => {
  globalStyles();

  return (
    <div className="App">
      <ModalProvider>
        <ToolsContextProvider>
          <SearchContextProvider>
            <Header />
            <ItemsList />

            <AddNewToolModal />

          </SearchContextProvider>
        </ToolsContextProvider>
      </ModalProvider>
    </div>
  );
};

export default App;
