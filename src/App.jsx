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
import Projects from './Component/Projects/Projects';
import UPMS from './Component/Projects/UPMS';
import Parking from './Component/Projects/Parking';

function App() {
  const [count, setCount] = useState(0);

  return (
      <>
        <Home/>
        <Navbar />
        <Outlet/>
        
      </>
  );
}

export default App;
