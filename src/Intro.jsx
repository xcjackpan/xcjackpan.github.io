import React from 'react';
import { Mail, Linkedin, GitHub, ChevronsDown, FileText } from 'react-feather';
import './Intro.css';

let Intro = (props) => {
  return (
    <div className="banner">
      <div className="text">
        Hi there! My name's <br/>
        <span className="name">JACK PAN.</span> <br/>
        I'm a computer science student who likes to solve his problems with <span className="code">code</span>.<br/>
        <span className="icons">
          <a href="https://github.com/xcjackpan"><GitHub className={"icon"} /></a>
          <a href="mailto:xcjackpan99@gmail.com"><Mail className={"icon"} /></a>
          <a href="https://www.linkedin.com/in/xcjackpan/"><Linkedin className={"icon"}/></a>
          <FileText onClick={props.openResume} className={"icon"}/>
        </span>
      </div>
      <img className="photo" src="images/face.jpg" alt="me"/>
      <div className="mouse">
      </div>
      <a href="#body" id="chevrons"><ChevronsDown className="icon" /></a>
    </div>
  );
}

export default Intro;
