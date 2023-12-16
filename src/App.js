import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";



function App() {

  const [isVisible, setIsVisible] = useState(false);
const [position, setPosition] = useState([0,0]);

const  handleClick = (event) => {
  setIsVisible(current => !current)
  setPosition([event.pageX,event.pageY]) 
} 
  return (
    <div onClick={handleClick}>
       <header className="App-header" >
        <img src={logo} style={{
        position: "absolute",
        left: position[0],
        top: position[1],
        tranform: "translateX(-50%)",
        transform: "translateY(-50%)",
        transition:'left 0.2s, top 0.2s'
        }} 
         className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
}

export default App;
