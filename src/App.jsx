import React from 'react';
import Intro from './Intro.jsx';
import Body from './Body.jsx';
import './App.css';

let openResume = () => {
	window.open('files/resume.pdf', '_blank', 'fullscreen=yes');
}

let App = () => {
  return (
    <div className="App">
      <Intro openResume={openResume}/>
      <Body openResume={openResume}/>
    </div>
  );
}

export default App;
