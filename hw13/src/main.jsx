import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import appStore from './redux/store';
import MainApp from './components/App/App';

const mountNode = document.querySelector('#root');
const appRoot = createRoot(mountNode);

appRoot.render(
  <React.StrictMode>
    <StoreProvider store={appStore}>
      <MainApp />
    </StoreProvider>
  </React.StrictMode>
);

