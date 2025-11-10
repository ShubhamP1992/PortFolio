import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aircraft Parts Management Web Application',
    context: 'Enterprise tooling for multi-airline fleets · Dexoc Solutions',
    timeframe: '2024',
    highlights: [
      'Built CSV-driven event tracking that captures part birth, installation, removal, and exchange with automated component histories.',
      'Optimized ASP.NET backend services and SQL queries to boost performance by 30% and accelerate data retrieval.',
      'Implemented Keycloak role-based authentication to secure workflows and protect sensitive aviation data.',
    ],
    stack: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Keycloak', 'AJAX'],
    link: '#',
  },
  {
    title: 'Exam Question Paper Generator',
    context: 'Scalable academic commerce platform · Capstone',
    timeframe: '2023',
    highlights: [
      'Automated question and assignment generation with dynamic blueprint creation tailored to course requirements.',
      'Delivered real-time solution distribution backed by modular templates for consistent formatting.',
      'Engineered a high-performance backend capable of handling large concurrent transactions with reliable response times.',
    ],
    stack: ['ASP.NET MVC', 'PostgreSQL', 'SQL Server', 'Azure', 'CI/CD'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="section__inner projects">
      <div className="section__header">
        <span className="section__eyebrow">Selected Work</span>
        <h2 className="section__title">High-impact builds from the last few years</h2>
        <p className="section__description">
          I love transforming ambiguous challenges into measurable wins. Here are a few collaborations
          that shipped meaningful results across aviation and education technology.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-card__meta">
              <span className="project-card__timeframe">{project.timeframe}</span>
              <span className="project-card__context">{project.context}</span>
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <ul className="project-card__list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-card__footer">
              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                className="project-card__link"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
              >
                Case study ↗
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
