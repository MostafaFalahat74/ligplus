import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./component/view/signup";
// import Authenticate from "./pages/authenticate";
// import Initialize from "./pages/initialize"
// import './scss/main.scss'
import App from './component/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);