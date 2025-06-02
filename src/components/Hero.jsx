import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './hero.css';

function Hero() {
  return (
    <section id="hero" className="hero" data-aos="fade-up">
      <div className="hero-content">
        <h1>
          Hi, I'm{' '}
          <span style={{ color: '#00ADB5', fontWeight: 'bold' }}>
            <Typewriter
              words={['Shubham Panchal', 'Software Developer', '.NET Core Developer']}
              loop={0} // 0 = infinite
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
    </section>
  );
}

export default Hero;
