import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Home />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Projects />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </main>
    </>
  );
}

export default App;
