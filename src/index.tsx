import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { config } from 'dotenv';
import store from './redux/store';
import App from './App';

config();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
