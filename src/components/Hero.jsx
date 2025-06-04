import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import { FaDownload ,FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

function Hero() {
  const icons = [FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, SiDotnet];

  const radius = 150; // Circle radius
  const center = 150; // Half of .skills-outer size (300/2)

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          <div>
            Hi, I'm <span className="myname">Shubham Panchal</span> <span className="wave">👋</span>
          </div>
          <b></b>
          <span className='type'>
            <Typewriter
              words={[ 'Software Developer', '.NET Core Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p>I'm a Developer who loves building modern web apps.</p>
        <div className="cta-buttons">
        <a href="#contact" className="cta-button">Get In Touch</a>
        <a
            href="/ShubhamPanchal.pdf"
            className="cta-button resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload style={{ marginRight: '8px' }} />
            Resume
          </a>
      </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/shubhampanchal1992/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0a66c2" />
          </a>
          <a href="https://github.com/ShubhamP1992" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="social-icon github-icon" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="skills-outer">
          <div className="skills-ring">
            {icons.map((Icon, index) => {
              const angle = (index / icons.length) * 2 * Math.PI;
              const x = center + radius * Math.cos(angle) - 25; // 25 = icon half width
              const y = center + radius * Math.sin(angle) - 25;
              return (
                <div className="skill-container" key={index}>
                  <div className="skill" style={{ top: y, left: x }}>
                    <Icon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
