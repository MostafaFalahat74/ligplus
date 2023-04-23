import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Authenticate from "./pages/authenticate";
import Initialize from "./pages/initialize"
import './scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Signup />}/>
         <Route path="/authenticate" element={<Authenticate />} />
         <Route path="/initialize" element={<Initialize />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
