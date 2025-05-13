import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;