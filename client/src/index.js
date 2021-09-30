import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom"
import Landing from './components/Landing/landing';
//import store from './Store'

ReactDOM.render(
  // <Provider store={store}></Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


