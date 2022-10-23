import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Principal from './Pages/MainPage/MainPage'

const App = () =>  {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="estudiantes" element={<Estudiantes/>} />
      </Routes>
    </div>
  );
}

export default App;

