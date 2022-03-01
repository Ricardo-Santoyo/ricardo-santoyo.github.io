import React from 'react';
import resume1 from '../images/resume-1.png';
import resume2 from '../images/resume-2.png';
import resumePDF from '../resume.pdf';

function Resume() {
  return (
    <div id="resume">
      <a href={resumePDF} download="resume">Download PDF</a>
      <img src={resume1} alt="Resume"></img>
      <img src={resume2} alt="Resume"></img>
    </div>
  );
}

export default Resume;