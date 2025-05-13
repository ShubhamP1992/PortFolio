import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ background: '#007acc', padding: '1rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: 0 }}>
        {['Home', 'Skills', 'Projects', 'Contact'].map(section => (
          <li key={section} style={{ margin: '0 1rem' }}>
            <a href={`#${section.toLowerCase()}`} style={{ color: '#fff' }}>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}