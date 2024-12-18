import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Me from './Component/Me';
import React from 'react';
import Home from './Component/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';
import Technology from './Component/Technology';
import Education from './Component/Education';
import Project from './Component/Project';

function App() {
  const [count, setCount] = useState(0);

  return (
      <>
        <Home/>
        <Navbar />
        <Outlet/>
        <Technology/>
        <Education/>
        <Project/>
        <Footer/>
      </>
  );
}

export default App;
