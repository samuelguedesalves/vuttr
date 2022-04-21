import React from 'react';

import { AddNewToolModal } from './components/organisms/AddNewToolModal';
import { Header } from './components/organisms/Header';
import { ItemsList } from './components/organisms/ItemsList';
import { globalStyles } from './styles/global';
import { ToolsContextProvider } from './hooks/tools';
import { ModalProvider } from './hooks/modal';
import { SearchContextProvider } from './hooks/search';
import { RemoveToolModal } from './components/organisms/RemoveToolModal';
import { RemoveModalProvider } from './hooks/removeModal';

const AppProviders: React.FC = ({ children }) => (
  <ModalProvider>
    <RemoveModalProvider>
      <ToolsContextProvider>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </ToolsContextProvider>
    </RemoveModalProvider>
  </ModalProvider>
);

const App: React.FC = () => {
  globalStyles();

  return (
    <div className="App">
      <AppProviders>
        <Header />
        <ItemsList />

        <AddNewToolModal />
        <RemoveToolModal />
      </AppProviders>
    </div>
  );
};

export default App;
