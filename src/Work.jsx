import React from 'react';
import "antd/dist/antd.css";
import './Work.css';
import { Timeline  } from 'antd';
let TimelineItem = Timeline.Item;

let WorkDescription = (props) => {
  return (
    <div className="description">
      <span className="company">{props.company}</span> <br/>
      <span className="role">{props.info}</span> <br/>
      {props.desc}
      <br/>
    </div>
  )
}

let WorkInfo = [{company: "Wish", image:"images/wish.png", 
                 info:"Software Developer | Jan - April 2020",
                 desc: 
                  <ul>
                    <li>Filler filler filler</li>
                    <li>Filler filler filler</li>
                  </ul>},
                {company: "D2L", image:"images/d2l.png", 
                 info:"Software Developer | May - Aug 2019",
                 desc: 
                  <ul>
                    <li>Improved NLP algorithm to generate questions from text, increasing yield of acceptable questions by ~60%</li>
                    <li>Led the design and development of in-browser PDF whiteboard and editor</li>
                    <li>Implemented major frontend features in Typescript using React</li>
                    <li>Built crucial backend functionality with Node.js, Express, and MongoDB</li>
                  </ul>},
                {company: "DragonAgile", image:"images/dragonagile.png", 
                 info:"Software Developer | May - Aug 2018",
                 desc: 
                  <ul>
                    <li>Developed permissions manager using React, Node.js, and Java</li>
                    <li>Built plugins for Jira and Confluence in Java</li>
                  </ul>},
               ]

let Work = () => {
  return (
    <div className="work">
      <span className="title">Where I've Worked</span>
      <div className="work-block">
        <Timeline className="timeline">
          {WorkInfo.map((elem) => {
            return <TimelineItem dot={<img className="icon" src={elem.image} alt=":)"/>}> 
                    <WorkDescription company={elem.company} info={elem.info} desc={elem.desc}/>
                  </TimelineItem>
          })}
        </Timeline>
        <div className="resume">
          <a href="/files/resume.pdf"><p className="resume-button">Full Resume</p></a>
        </div>
      </div>
    </div>
  );
}

export default Work;
