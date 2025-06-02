// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

function Skills() {
  const skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git & GitHub',
    'APIs',
    'Node.js',
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skillList.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
