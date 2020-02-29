import React from 'react';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import './Body.css';

let Body = (props) => {
  return (
    <div id="body" className="body">
      <Work openResume={props.openResume} />
      <Projects />
    </div>
  );
}

export default Body;
