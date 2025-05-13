import React from 'react';

const projects = [
  { title: 'Project A', description: 'Description of project A', link: '#' },
  { title: 'Project B', description: 'Description of project B', link: '#' },
  { title: 'Project C', description: 'Description of project C', link: '#' }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 1rem', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {projects.map(({ title, description, link }) => (
          <div key={title} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', background: '#fafafa' }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}