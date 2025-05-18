import React from 'react';

const skills = {
  Backend: ['C#', '.NET Core', 'ASP.NET MVC', 'Entity Framework', 'Web API'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'jQuery', 'AJAX'],
  Database: ['SQL Server', 'PostgreSQL', 'Stored Procedures'],
  Tools: ['Git', 'SourceTree', 'Jira'],
  Others: ['Microsoft Azure', 'Keycloak', 'LINQ']
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 1rem', background: '#f0f0f0' }}>
      <h2 style={{ textAlign: 'center' }}>Key Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} style={{ margin: '1rem', minWidth: '150px' }}>
            <h3>{category}</h3>
            <ul>
              {list.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}