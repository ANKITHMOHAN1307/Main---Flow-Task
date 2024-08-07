import React from 'react';
import githubLogo from '../assets/github.png'; // make sure to add a github-logo.png image in the assets folder
import linkedinLogo from '../assets/linkedin.png'; // make sure to add a linkedin-logo.png image in the assets folder

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src={githubLogo} alt="GitHub Logo" />
      <a href="https://github.com/ANKITHMOHAN1307">GitHub</a>
      <img src={linkedinLogo} alt="LinkedIn Logo" />
      <a href="https://www.linkedin.com/in/ankith-mohan">LinkedIn</a>
    </div>
  );
}

export default AboutMe;
