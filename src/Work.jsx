import React from 'react';
import "antd/dist/antd.css";
import './Work.css';
import { Collapse, Tag } from 'antd';
let Panel = Collapse.Panel;

let WorkPanelHeader = (props) => {
  return (
    <div className="header">
      <img className="icon" src={props.image} alt=":)"/>
      <div className="heading">
        <span className="company">{props.company}</span>
        <span className="info">{props.info}</span>
      </div>
    </div>
  )
}

let WorkInfo = [{company: "Wish", image:"images/wish.png", 
                 info:"Full Stack Engineer | Jan - April 2020",
                 time: "Jan - April 2020",
                 desc:
                  <ul>
                    <li>Filler filler filler</li>
                    <li>Filler filler filler</li>
                  </ul>},
                {company: "D2L", image:"images/d2l.png", 
                 info:"Software Developer | May - Aug 2019",
                 time: "May - Aug 2019",
                 desc:
                  <ul>
                    <li>Improved NLP algorithm to generate questions from text, increasing yield of acceptable questions by ~60%</li>
                    <li>Led the design and development of in-browser PDF whiteboard and editor</li>
                    <li>Implemented major frontend features in Typescript using React</li>
                    <li>Built crucial backend functionality with Node.js, Express, and MongoDB</li>
                  </ul>},
                {company: "DragonAgile", image:"images/dragonagile.png", 
                 info:"Software Developer | May - Aug 2018",
                 time: "May - Aug 2018",
                 desc:
                  <ul>
                    <li>Developed permissions manager using React, Node.js, and Java</li>
                    <li>Built plugins for Jira and Confluence in Java</li>
                  </ul>},
               ]

let Skills = {Languages: ["Python", "JavaScript", "TypeScript", "CSS", "C++", "C"], 
              Frameworks: ["React", "Redux", "Express", "Mongoose"], 
              Technologies: ["Node", "MongoDB", "Docker", "React Native", "Git"]};

let Work = (props) => {
  return (
    <div className="work">
      <span className="title">Experience</span>
      <div className="experience-block">
        <div className="timeline">
          {WorkInfo.map((elem, index) => {
            return (
              <Collapse className="work-item" expandIconPosition="right">
                <Panel className="panel"
                       key={index}
                       header={<WorkPanelHeader image={elem.image} company={elem.company} info={elem.info}/>}>
                  {elem.desc}
                </Panel>
              </Collapse>
            )
          })}
        </div>
        <div className="resume-skills">
          <p className="resume-button" onClick={props.openResume}>Resume</p>
          {["Languages", "Frameworks", "Technologies"].map((elem) => {
            return (
              <div className="skill-block">
                <span className="subtitle">{elem}</span>
                <div className="skills">
                  {Skills[elem].map((name) => {
                    return <Tag className="skill">{name}</Tag>;
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
