import logo from './logo.svg';
import './App.css';
// import Card from './Card/card'
import React, { useState, useEffect } from "react";
import Card from './Card/card'
import Axios from "axios";
import sound from "./assets/sounds/sound.mp3";
import moon from '../src/assets/images/moon.png';
import sun from '../src/assets/images/sun.png';
function App() {
      const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
      <div className={isDarkMode ? "App dark-mode" : "App"}>
     <img
        src={isDarkMode ? sun : moon}
        id="icon"
        alt={isDarkMode ? "sun" : "moon"}
        onClick={toggleDarkMode}
      />
      <div className='app'>
      <div className="card1" >
            <Card />
      </div>
      <div className="card2" >
            <Card />
      </div>
      <div className="card3" >
            <Card />
      </div>
      <div className="card4" >
            <Card />
      </div>
      </div>
    </div>
  
  );
}


export default App;
