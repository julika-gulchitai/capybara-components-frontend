import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App.jsx';
import store, { persistedStore } from './redux/store.js';
import Global from './css/common.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <BrowserRouter basename="/capybara-components-frontend">
        <App />
        <Global />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
