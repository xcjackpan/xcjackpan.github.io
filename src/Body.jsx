import React from 'react';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import './Body.css';

let Body = () => {
  return (
    <div id="body" className="body">
      <Work />
      <Projects />
    </div>
  );
}

export default Body;
