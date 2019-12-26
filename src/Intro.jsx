import React from 'react';
import { Mail, Linkedin, GitHub, ChevronsDown } from 'react-feather';
import './Intro.css';

let Intro = () => {
  return (
    <div className="banner">
      <div className="text">
        Hi there! My name's <br/>
        <span className="name">JACK PAN.</span> <br/>
        I study computer science at the University of Waterloo.<br/>
        <span className="icons">
          <a href="https://github.com/xcjackpan"><GitHub className={"icon"} /></a>
          <a href="mailto:xcjackpan99@gmail.com"><Mail className={"icon"} /></a>
          <a href="https://www.linkedin.com/in/xcjackpan/"><Linkedin className={"icon"}/></a>
        </span>
      </div>
      <img className="photo" src="images/face.jpg" alt="me"/>
      <div className="mouse">
      </div>
      <ChevronsDown id="chevrons" className="icon" />
    </div>
  );
}

export default Intro;
