import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { Header, Main } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
