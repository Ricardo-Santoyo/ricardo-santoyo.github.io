import React from 'react';
import resume from '../images/resume.png';
import resumePDF from '../resume.pdf';

function Resume() {
  return (
    <div id="resume">
      <a href={resumePDF} download="resume">Download PDF</a>
      <img src={resume} alt="Resume"></img>
    </div>
  );
}

export default Resume;