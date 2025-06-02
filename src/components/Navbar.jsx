import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}

export default Navbar;
