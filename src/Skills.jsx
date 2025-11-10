import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: '.NET Platform',
    description: 'Robust services with clean architecture patterns and domain-driven thinking.',
    icon: '🛠️',
    skills: ['C#', '.NET Core', 'ASP.NET MVC', 'Entity Framework', 'Web API', 'LINQ'],
  },
  {
    title: 'Frontend & UX',
    description: 'Readable, accessible interfaces with performant component workflows.',
    icon: '🎨',
    skills: ['React', 'JavaScript', 'HTML5 & CSS3', 'jQuery', 'AJAX', 'Framer Motion'],
  },
  {
    title: 'Data & Security',
    description: 'Secure data flows, optimized queries, and role-aware authentication.',
    icon: '🔐',
    skills: ['SQL Server 2022', 'PostgreSQL', 'Stored Procedures', 'Keycloak', 'RESTful APIs'],
  },
  {
    title: 'Cloud & Collaboration',
    description: 'Continuous delivery habits that keep teams aligned and shipping.',
    icon: '🚀',
    skills: ['Microsoft Azure', 'Git', 'SourceTree', 'Jira', 'Agile Delivery'],
  },
];

export default function Skills() {
  const iconAnimation = {
    animate: {
      y: [0, -6, 0],
      rotate: [0, 4, -4, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="section__inner">
      <div className="section__header">
        <span className="section__eyebrow">My Toolkit</span>
        <h2 className="section__title">Trusted technologies & workflows</h2>
        <p className="section__description">
          I blend enterprise-grade backends with expressive frontends to ship dependable digital products.
          Here’s what powers my day-to-day engineering practice.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-card"
            initial={{ opacity: 0, y: 24, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -14, rotateX: 0, rotateY: 6 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="skill-card__icon"
              aria-hidden="true"
              animate={iconAnimation.animate}
              transition={iconAnimation.transition}
            >
              <span className="skill-card__icon-glow" />
              {group.icon}
            </motion.div>
            <h3 className="skill-card__title">{group.title}</h3>
            <p className="skill-card__description">{group.description}</p>
            <div className="skill-card__tags">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="tag tag--skill"
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}