import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const prefersDark = useMemo(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
    []
  );
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || (prefersDark ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="main-content">
        <motion.section
          id="home"
          className="section section--hero"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Home theme={theme} />
        </motion.section>

        <motion.section
          id="skills"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="journey"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Timeline />
        </motion.section>

        <motion.section
          id="projects"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          className="section section--contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}

export default App;
