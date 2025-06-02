// src/components/Portfolio.jsx
import React, { useState } from 'react';
import './Portfolio.css';
import img1 from './img1.jpg';
import img2 from './img2.jpeg';
import img3 from './img3.webp';
import img4 from './img4.jpg';
import img5 from './img5.webp';
import img6 from './img6.png';

const projects = [
  {
    id: 1,
    title: 'Creative Design',
    category: 'Design',
    image: img1,
  },
  {
    id: 2,
    title: 'UI/UX App',
    category: 'UI/UX',
    image: img2,
  },
  {
    id: 3,
    title: 'Web Development',
    category: 'Development',
    image: img4,
  },
  {
    id: 4,
    title: 'Branding Concept',
    category: 'Branding',
    image: img3,
  },
  {
    id: 5,
    title: 'App Redesign',
    category: 'UI/UX',
    image: img5,
  },
  {
    id: 6,
    title: 'Modern Website',
    category: 'Development',
    image: img6,
  },
];

const categories = ['All', 'Design', 'UI/UX', 'Development', 'Branding'];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <h2>My Portfolio</h2>
        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                selectedCategory === cat ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-item" data-aos="fade-up">
            <img src={project.image} alt={project.title} />
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
