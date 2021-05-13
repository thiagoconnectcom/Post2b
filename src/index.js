import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import GlobalStyle from "./styles"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

