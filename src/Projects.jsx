import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '1. Aircraft Parts Management Web Application',
    description: [
      'Contributed to the development of an aircraft parts management web application designed to support multiple airlines by enabling detailed event tracking through CSV file uploads.',
      'Designed and enhanced core features for event management, including part birth, installation, removal, and exchange, ensuring accurate tracking and automated generation of component history.',
      'Implemented AJAX to enable real-time data interactions, improving responsiveness and enhancing the overall user experience.',
      'Integrated Keycloak to implement role-based authentication and authorization, significantly enhancing application security and access control.',
      '.NET backend development focusing on performance optimization, secure data handling, and efficient API integrations.',
    ],
    link: '#',
  },
  {
    title: '2. Exam Question Paper Generator',
    description: [
      'Led the development of a scalable e-commerce platform focused on automating question and assignment generation, with features for real-time solution delivery and dynamic blueprint creation.',
      'Designed and implemented customizable templates and a modular architecture, enabling efficient content generation and consistent formatting across educational materials.',
      'Engineered a high-performance backend capable of handling large volumes of concurrent transactions, ensuring fast response times and reliable user experiences.',
    ],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 1rem', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {projects.map(({ title, description, link }, index) => (
          <motion.div
            key={title}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              background: '#fafafa',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{title}</h3>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
              {description.map((point, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  {point}
                </li>
              ))}
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: '#0070f3' }}>
              View Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
