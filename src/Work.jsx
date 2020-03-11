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
                 info:"Full Stack Engineer, Payments | Jan - April 2020",
                 time: "Jan - April 2020",
                 desc_:
                  <ul>
                    <li>Filler filler filler</li>
                    <li>Filler filler filler</li>
                  </ul>,
                 desc:
                  <div className="description">
                    Not sure yet, captain.
                  </div>,
                },
                {company: "D2L", image:"images/d2l.png", 
                 info:"Software Developer | May - Aug 2019",
                 time: "May - Aug 2019",
                 desc_:
                  <ul>
                    <li>Improved NLP algorithm to generate questions from text, increasing yield of acceptable questions by ~60%</li>
                    <li>Led the design and development of in-browser PDF whiteboard and editor</li>
                    <li>Implemented major frontend features in Typescript using React</li>
                    <li>Built crucial backend functionality with Node.js, Express, and MongoDB</li>
                  </ul>,
                 desc:
                  <div className="description">
                    In trying to generate practice quizzes from text passages, I improved 
                    our algorithm to increase output of acceptable questions by <strong>~60%</strong>.
                    <br/><br/>
                    I led a technical team in the development of an in-browser PDF whiteboard and editor, 
                    similar to OneNote. Our <strong>React</strong> frontend was written in <strong>TypeScript</strong>.
                    The backend used <strong>Node</strong> and <strong>MongoDB</strong> with <strong>Mongoose</strong>.
                  </div>,
                },
                {
                  company: "DragonAgile", image:"images/dragonagile.png", 
                  info:"Software Developer | May - Aug 2018",
                  time: "May - Aug 2018",
                  desc_:
                    <ul>
                      <li>Developed permissions manager using React, Node.js, and Java</li>
                      <li>Built plugins for Jira and Confluence in Java</li>
                      <li>Engineered front-end improvements to the company website using HTML and CSS</li>
                    </ul>,
                  desc: 
                    <div className="description">
                      Using <strong>React</strong>, <strong>Node</strong>, and <strong>Java</strong>,
                      I developed a full-stack web app to help manage a client's user permissions in their 
                      version control software.
                      <br/><br/>
                      I also designed and prototyped a variety of Jira plugins using <strong>Java</strong>. Each
                      was built according to specifications from our clients.
                    </div>,
                },
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
