import React from 'react';
import { ReactComponent as GithubIcon } from '../icons/github.svg';

function Project(props) {
  return (
    <div className="project">
      <h1>{props.title}</h1>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className={props.className}>
        <img src={props.src} alt={props.title}></img>
      </a>
      <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="githubLink"><GithubIcon /></a>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="viewLink">View</a>
    </div>
  );
}

export default Project;