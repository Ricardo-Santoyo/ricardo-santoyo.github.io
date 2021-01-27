import React from 'react';

function Skills() {
  return (
    <div id="skillsContainer">
      <div className="skillsColumn">
        <h2>Front-End</h2>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Jest</p>
      </div>
      <div className="skillsColumn">
        <h2>Back-End</h2>
        <p>Ruby</p>
        <p>Ruby On Rails</p>
        <p>RSpec</p>
        <p>SQL</p>
      </div>
      <div className="skillsColumn">
        <h2>Other</h2>
        <p>Git</p>
        <p>GitHub</p>
        <p>NPM</p>
        <p>WebPack</p>
        <p>Heroku</p>
      </div>
    </div>
  );
}

export default Skills;