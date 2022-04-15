import './App.css';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<OneProduct />} path="/product/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//TESTING TESTING!!

export default App;