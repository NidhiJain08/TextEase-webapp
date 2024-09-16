import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

const App=()=> {
  const[mode,setMode]=useState('light');//tells whether dark mode enabled or not

  const toggleMode=()=>{
    if(mode==='light')//light mode hai toh button click karne pe dark ho jaega 
    {
      setMode('dark');
    document.body.style.backgroundColor='#042743';
    }    
    else             //dark mode hai toh button click karne pe light ho jaega 
    {
      document.body.style.backgroundColor='white';
      setMode('light');
    }
    
  }
  return (
    <div className="App">
      <Navbar title="TextEase" about="About" mode={mode} changeMode={toggleMode}/>
      <div className="container my-3"> {/*y axis me margin*/}{/*BOOTSTRAP ki class hai container*/} 
      <TextForm heading="Enter your text" mode={mode}/> 
      </div>
    </div>
  );
}

export default App;
