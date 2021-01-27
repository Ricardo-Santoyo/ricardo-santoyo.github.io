import React from 'react';
import { Link } from 'react-router-dom';
import Skills from './Skills';
import Project from './Project';
import ConnectU from '../images/connectu.png';
import Battleship from '../images/battleship.png';
import Cardboardluxury from '../images/cardboardluxury.png';
import WeatherApp from '../images/weatherapp.png';
import Calculator from '../images/calculator.png';
import MemoryCard from '../images/memorycard.png';
import { ReactComponent as MailIcon } from '../icons/mail.svg';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../icons/linkedin.svg';

function Home() {
  return (
    <div id="home">
      <h1 id="header">Hi, I'm Ricardo</h1>
      <p id="headerText">Web Developer</p>
      <div id="content">
        <h1 className="contentHeader">SKILLS</h1>
        <Skills />
        <h1 className="contentHeader">PROJECTS</h1>
        <div id="projectsContainer">
          <Project 
            title="ConnectU" 
            link="https://connectuapp.herokuapp.com/" 
            className="gif one" 
            src={ConnectU}
            githubLink="https://github.com/Ricardo-Santoyo/facebook/"
          />
          <Project 
            title="Battleship" 
            link="https://ricardo-santoyo.github.io/battleship/" 
            className="gif two" 
            src={Battleship}
            githubLink="https://github.com/Ricardo-Santoyo/battleship/"
          />
          <Project 
            title="Cardboard Luxury" 
            link="https://ricardo-santoyo.github.io/shopping-cart/" 
            className="gif three" 
            src={Cardboardluxury}
            githubLink="https://github.com/Ricardo-Santoyo/shopping-cart/"
          />
          <Project 
            title="Weather App" 
            link="https://ricardo-santoyo.github.io/weather-app/" 
            className="gif four" 
            src={WeatherApp}
            githubLink="https://github.com/Ricardo-Santoyo/weather-app/"
          />
          <Project 
            title="Calculator" 
            link="https://ricardo-santoyo.github.io/calculator/" 
            className="gif five" 
            src={Calculator}
            githubLink="https://github.com/Ricardo-Santoyo/calculator/"
          />
          <Project 
            title="Memory Card Game" 
            link="https://ricardo-santoyo.github.io/memory-card/" 
            className="gif six" 
            src={MemoryCard}
            githubLink="https://github.com/Ricardo-Santoyo/memory-card/"
          />
        </div>
        <div id="homeFooter">
          <Link to="/contact" replace  id="contactmeLink">
            <button>Contact Me</button>
          </Link>
          <div id="footerLinks">
              <a href="mailto:ricardosantoyoch@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MailIcon />
                  <span>ricardosantoyoch@gmail.com</span>
              </a>
                <a href="https://github.com/Ricardo-Santoyo" target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                  <span>On GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ricardo-santoyo-867628180/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon />
                  <span>On Linkedin</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;