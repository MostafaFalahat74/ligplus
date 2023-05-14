import { useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Component/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
