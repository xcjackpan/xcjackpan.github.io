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

let WorkInfo = [
  {
    company: "Bloomberg", image:"images/bloomberg.png", 
    info: "Incoming Software Engineer | May - Aug 2021",
    time: "May - Aug 2021",
    desc:
    <div className="description">
      Placeholder
    </div>,
    disabled: true,
  },
  {
    company: "Wish (Again!)", image:"images/wish.png", 
    info: "Software Engineer, Payments | Sep - Dec 2020",
    time: "Sep - Dec 2020",
    desc:
    <div className="description">
      I returned to the Payments team at Wish, this time working remotely from Canada!
      <br />
      <br />
      I designed and built a data aggregation pipeline using <strong>Python</strong> and <strong>SQL</strong> that automatically
      generated financial reports from internal data. This tool helped meet a <strong>critical auditing requirement needed ahead 
      of <a href="https://www.investors.com/news/technology/wish-ipo-puts-17-billion-plus-valuation-e-commerce-contextlogic/">
        the company's IPO
      </a></strong>.
      <br />
      <br />
      I also built a suite of anti-fraud logic all throughout the payments processing lifecycle — combining a wide variety of 
      signals like a user's purchase history, their actions on a page, and the aggregated behavior of other similar users — which
      led to impacts like a <strong>40% reduction in the number of fraudulent attempted payment information updates</strong>.
      <br />
      <br />
      I helped defend against a sudden and critical attack on our payments system by fraudsters, working with the buyer risk team
      to push out urgent defensive measures that <strong>prevented >$667k in losses to fraudulent transactions</strong>
    </div>,
    disabled: false,
  },
  {
    company: "Wish", image:"images/wish.png", 
    info: "Software Engineer, Payments | Jan - April 2020",
    time: "Jan - April 2020",
    desc_:
    <ul>
      <li>Engineered functionality in <strong>Python</strong> with <strong>Tornado</strong> and <strong>MongoDB</strong> to block orders when user behavior was suspicious; added an admin UI in React for non-technical staff to easily configure detection parameters</li>
      <li>Built a system to unban certain users deemed unlikely to offend again, increasing GMV by <strong>$120K per month</strong></li>
      <li>Implemented a flow in <strong>Python</strong> with <strong>Tornado</strong> and <strong>MongoDB</strong> to retry processing failed payments from customers under special conditions, with a projected recovery of <strong>$45 million annually</strong></li>
      <li>Developed features and fixed bugs to improve payments processing flow, reduce customer fraud, and enhance the user checkout experience – leading to impacts like a 7% growth in orders by promoting multi-installment payments</li>
    </ul>,
    desc:
    <div className="description">
      I worked on the Payments team at Wish, using <strong>Python</strong> to work on code that processed the purchases
      of millions of customers.
      <br />
      <br />
      Using <strong>Python</strong> with <strong>Tornado</strong>, I built functionality that would block a user's order when 
      we thought they were behaving suspiciously. Along with this, I included an admin panel UI in <strong>React</strong> that 
      allowed non-technical staff to configure the detection parameters.
      <br />
      <br />
      I developed a process for retrying failed payments that met certain conditions with a projected 
      annual recovery of <strong>$45 million</strong>. 
      <br />
      <br />
      I also implemented a feature to unban banned users that we deemed unlikely to
      offend again, increasing our gross merchandise value by <strong>$120K per month</strong>.
    </div>,
    disabled: false,
  },
  {
    company: "D2L", image:"images/d2l.png", 
    info: "Software Developer | May - Aug 2019",
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
    disabled: false,
  },
  {
    company: "DragonAgile", image:"images/dragonagile.png", 
    info: "Software Developer | May - Aug 2018",
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
    disabled: false,
  },
]

let Skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Go", "SQL", "CSS", "C++", "C"], 
  Frameworks: ["Flask", "Tornado", "React", "Redux", "Express"], 
  Technologies: ["Node", "MongoDB", "Docker", "Git"]
};

let Work = (props) => {
  return (
    <div className="work">
      <span className="title">Experience</span>
      <div className="experience-block">
        <div className="timeline">
          {WorkInfo.map((elem, index) => {
            let collapseName = "work-item"
            if (elem["disabled"]) {
              collapseName = "work-item-disabled"
            }
            return (
              <Collapse className={collapseName} expandIconPosition="right">
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
