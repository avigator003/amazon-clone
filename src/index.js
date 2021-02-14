import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
  <App />
  </StateProvider>,
  document.getElementById('root')
);
