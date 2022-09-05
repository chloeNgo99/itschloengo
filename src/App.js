import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

import style from './components/style.css';


function App() {


  return <div className='outlineContainer'>

    <div className='buttonTop'>
      <div className='red'></div>
      <div className='yellow'></div>
      <div className='green'></div>
    </div>


    <div className='title' id="homeSection">
      <h1>IT'S CHLOE NGO</h1>
    </div>


    <Nav />

    <div className='wallpaper'>
      <img src='./images/wallpaper.JPG' alt="wallpaper" />
    </div>

    <About/>
    <Project />
    <Contact />
  </div>;
}

export default App;
