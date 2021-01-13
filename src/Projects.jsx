import React from 'react';
import { Card } from 'antd';
import { Code } from 'react-feather';
import './Projects.css';
const { Meta } = Card;

let ProjectDescription = (props) => {
  return (
    <div className="description">
      <span className="tools">{props.tools}</span> <br/>
      <span className="desc">{props.desc}</span> <br/>
      <br/>
    </div>
  )
}

let ProjectTitle = (props) => {
  return (
    <div className="title-block">
      <span className="project-name">{props.name}</span> {props.award ? <span className="award">{props.award}</span> : null}
    </div>
  )
}

let ProjectInfo = [
  {
    name: "UWClasswatch",
    image:"images/classwatch.png",
    tools:"React, Node, Typescript, MongoDB",
    desc: 
      `A web app that lets students subscribe to receive email notifications when a course they're interested in 
      has a spot open for enrolment. 1.2k+ users.`,
    github: "https://github.com/xcjackpan/classwatch-v2",
    demo: "http://www.uwclasswatch.com/",
  },
  {
    name: "AR World",
    image:"images/arworld.png", 
    tools:"Kotlin, React, Node",
    desc: 
      `An Android app identifies images through the camera and replaces them 
      in AR with videos uploaded through our web interface.`,
    github: "https://github.com/xcjackpan/ar-world",
    demo: "https://www.youtube.com/watch?v=BUm1GCDVzN8",
    award: "Best AR App @ PennApps XX",
  },
  {
    name: "Claire",
    image:"images/claire.png", 
    tools:"React, Node, Firebase",
    desc: 
      `A chatbot for senior citizens which uses sentiment analysis to compute 
      and display metrics on mental wellbeing.`,
    github: "https://github.com/xcjackpan/claire",
    award: "Finalist @ HackThe6ix",
  },
  {
    name: "Chess DLC",
    image:"images/chess_dlc.png",
    tools:"Go, React, Typescript",
    desc: 
      `A web client for me to experiment with my nerdiest hobby: designing variants of chess. Users can freely create
      and invite each other to matches. Games are all played in real-time thanks to websockets concurrently managed
      on the backend.`,
    github: "https://github.com/xcjackpan/chess_dlc",
    demo: "http://chessdlc-env.eba-73rgmsgm.ca-central-1.elasticbeanstalk.com/",
  },
  {
    name: "Ceci",
    image:"images/ceci.png", 
    tools:"Python",
    desc: 
      `An interpreter for a programming language of my own design. Composed of a CFG, tokenizer, LL(1) parser, and
      evaluator built from scratch. Includes functions, control flow statements, and my own novel construct: pipelining.`,
    github: "https://github.com/xcjackpan/ceci",
    demo: "http://ceci-env.eba-3tte3bus.ca-central-1.elasticbeanstalk.com/",
  },
  {
    name: "JAKE",
    image:"images/jake.png", 
    tools:"C++",
    desc: 
      `An NLP keyword-extraction algorithm implemented according to RAKE white paper. 
      Modified to factor in long phrases with irrelevant words and popularity of neighbours.`,
    github: "https://github.com/xcjackpan/jake",
  },
  {
    name: "Dunderbot",
    image:"images/dunderbot.png", 
    tools:"Javascript, React",
    desc: `A web app using Markov chains to generate fresh new scenes of The Office that are only mildly incoherent.`,
    github: "https://github.com/xcjackpan/dunderbot",
    demo: "https://dunderbot.herokuapp.com/",
  }
]

let Projects = () => {
  return (
    <div className="projects">
      <span className="title">Projects</span>
      <div className="project-grid">
        {ProjectInfo.map((elem) => {
          let actions = [<a href={elem.github}><Code size={20}/></a>];
          if (elem.demo) {
            actions.push(<a href={elem.demo} target="_blank" rel="noopener noreferrer"><span>DEMO</span></a>);
          }
          return <Card hoverable className="card" cover={<img className="splash" src={elem.image} alt=":)"/>}
                       actions={actions}>
                   <Meta title={<ProjectTitle name={elem.name} award={elem.award}/>} 
                                description={<ProjectDescription tools={elem.tools} desc={elem.desc}/>} />
                 </Card>
        })}
      </div>
    </div>
  );
}

export default Projects;
