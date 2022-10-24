import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Principal from './Pages/MainPage/MainPage'

const App = () =>  {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

