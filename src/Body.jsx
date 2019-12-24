import React from 'react';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import './Body.css';

let Body = () => {
  return (
    <div className="body">
      <Work />
      <Projects />
    </div>
  );
}

export default Body;
