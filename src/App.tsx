import React from 'react';
import { Header } from './components/organisms/Header';
import { globalStyles } from './styles/global';

const App: React.FC = () => {
  globalStyles();

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
