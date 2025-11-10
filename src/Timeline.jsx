import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2024 — Present',
    title: 'Junior Software Developer · Dexoc Solutions (Ahmedabad)',
    description:
      'Enhancing ASP.NET services for aviation clients with optimized SQL, 30% faster performance, and automated CSV ingestion that reduces manual tracking by 40%.',
    tags: ['ASP.NET Core', 'SQL Optimization', 'Keycloak'],
  },
  {
    year: 'Feb 2024 — Apr 2024',
    title: 'Software Engineer Intern · Civica Resource Pvt. Ltd. (Vadodara)',
    description:
      'Delivered ASP.NET MVC modules with efficient data management, event-driven integrations, and seamless communication between frontend interfaces and backend services.',
    tags: ['ASP.NET MVC', 'Azure', 'Agile Delivery'],
  },
  {
    year: '2020 — 2024',
    title: 'B.Tech Computer Engineering · CHARUSAT University',
    description:
      'Graduated with a CGPA of 7.45/10 after capstone work on scalable exam generation systems and hands-on research in modern web technologies.',
    tags: ['Computer Engineering', 'CGPA 7.45/10', 'Capstone Project'],
  },
  {
    year: '2019 — 2020',
    title: 'Higher Secondary Education · GHSEB (Vashitha Vidyalaya, Surat)',
    description:
      'Completed 12th Grade with 76.61%, building the analytical foundation that led to engineering and software development.',
    tags: ['Mathematics', 'Physics', 'GHSEB 76.61%'],
  },
];

export default function Timeline() {
  return (
    <div className="section__inner timeline">
      <div className="section__header">
        <span className="section__eyebrow">Journey</span>
        <h2 className="section__title">Milestones that shaped my craft</h2>
        <p className="section__description">
          A snapshot of the teams, problems, and technologies that refined my engineering mindset and
          helped me deliver resilient products.
        </p>
      </div>

      <div className="timeline__wrapper" aria-label="Career timeline">
        <div className="timeline__line" aria-hidden="true" />

        {timelineEvents.map((event, index) => (
          <motion.article
            key={event.year}
            className="timeline__event"
            initial={{ opacity: 0, y: 40, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="timeline__marker">
              <span className="timeline__pulse" />
            </div>

            <div className="timeline__content">
              <span className="timeline__year">{event.year}</span>
              <h3 className="timeline__title">{event.title}</h3>
              <p className="timeline__description">{event.description}</p>
              <div className="timeline__tags">
                {event.tags.map((tag) => (
                  <span key={tag} className="chip chip--subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

