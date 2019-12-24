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

let ProjectInfo = [{name: "UWClasswatch", image:"images/classwatch.png", 
                    tools:"React, Typescript, NodeJS, Express, MongoDB",
                    desc: `An app that lets students subscribe to receive email notifications when a course they're interested in 
                           has a spot open for enrolment. 1.2k+ users.`,
                    github: "https://github.com/xcjackpan/classwatch-v2",
                    demo: "http://www.uwclasswatch.com/"},
                   {name: "AR World", image:"images/arworld.png", 
                    tools:"Kotlin, React, NodeJS",
                    desc: `A smartphone camera app identifies images and replaces them with 
                           videos uploaded through our web interface.`,
                    github: "https://github.com/xcjackpan/ar-world",
                    demo: "https://www.youtube.com/watch?v=BUm1GCDVzN8",
                    award: "Best AR Hack @ PennApps XX"},
                   {name: "Claire", image:"images/claire.png", 
                    tools:"React, NodeJS, Firebase",
                    desc: `A chatbot for senior citizens which uses sentiment analysis to compute 
                           and display metrics on mental wellbeing.`,
                    github: "https://github.com/xcjackpan/claire",
                    award: "Finalist @ HackThe6ix"},
                   {name: "JAKE", image:"images/jake.png", 
                    tools:"C++",
                    desc: `NLP keyword-extraction algorithm implemented from scratch according to RAKE white paper. 
                           Modified to account for long phrases with irrelevant words and popularity of neighbours.`,
                    github: "https://github.com/xcjackpan/jake"}]

let Projects = () => {
  return (
    <div className="projects">
      <span className="title">What I've Done</span>
      <div className="project-grid">
        {ProjectInfo.map((elem) => {
          let actions = [<a href={elem.github}><Code size={20}/></a>];
          if (elem.demo) {
            actions.push(<a href={elem.demo}><span>DEMO</span></a>);
          }
          return <Card hoverable className="card" cover={<img className="icon" src={elem.image} alt=":)"/>}
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
