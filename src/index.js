import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';

import {FronteggProvider} from '@frontegg/react';
import {BrowserRouter} from 'react-router-dom';

const contextOptions = {
  baseUrl: process.env.REACT_APP_FRONTEGG_URL,
};

ReactDOM.render(
  <BrowserRouter>
    <FronteggProvider contextOptions={contextOptions}>
      <App />
    </FronteggProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
