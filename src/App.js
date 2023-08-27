import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#012204";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  } 
  return (
    <>
      <Navbar title="TextConverter" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForms heading= "Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
      </div>
     {/* <About />  */}
    
      
       
        
    </>
  );
}

export default App;
