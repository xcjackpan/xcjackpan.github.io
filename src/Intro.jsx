import React from 'react';
import { Mail, Linkedin, GitHub } from 'react-feather';
import './Intro.css';

let Intro = () => {
  const icon_size = 35;
  return (
    <div className="intro">
      <div className="banner">
        <div className="text">
          Hi there! My name's <br/>
          <span className="name">JACK PAN.</span> <br/>
          I study computer science at the University of Waterloo.<br/>
          <span className="icons">
            <a href="https://github.com/xcjackpan"><GitHub size={icon_size}/></a>
            <a href="mailto:xcjackpan99@gmail.com"><Mail size={icon_size}/></a>
            <a href="https://www.linkedin.com/in/xcjackpan/"><Linkedin size={icon_size}/></a>
          </span>
        </div>
        <img className="photo" src="images/face.jpg" alt="me"/>
      </div>
    </div>
  );
}

export default Intro;
