import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import heroImage from './hero.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm{' '}
          <span>
            <Typewriter
              words={['Shubham Panchal', 'Software Developer', '.NET Core Developer']}
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
        <a href="#contact" className="cta-button">Get In Touch</a>
      </div>

      <div class="hero-right"></div>

      <img src={heroImage}  alt="Hero" className="hero-image" />
    </section>
  );
}

export default Hero;
