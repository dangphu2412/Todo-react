import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './common/utils';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/Todo.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
