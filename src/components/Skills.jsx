// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

function Skills() {
  const skillList = [
    'HTML', 'CSS', 'JavaScript',  'Git & GitHub', 'Node.js', 'C#' , '.NET Core', '.NET Web Api', 'ASP.NET MVC', 'ASP .NET Core', 'Entity Framework', 'SQL', 'MsSQL', 'PostgreSQL', 'JQuery', 'AJAX', 'ReactJS', 'C++', 'Source Tree', 'Jira', 'Microsoft Azure', 'KeyCloak authentication', 'Store Procedures', 'LINQ'
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
