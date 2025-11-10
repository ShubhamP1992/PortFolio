import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="section__inner contact">
      <div className="section__header">
        <span className="section__eyebrow">Let’s Collaborate</span>
        <h2 className="section__title">Have a challenge in mind?</h2>
        <p className="section__description">
          I’m open to discussing engineering roles, contract work, or speaking opportunities.
          Drop a note—I’ll reply within a business day.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-card__details">
          <motion.a
            href="mailto:panchalshubham1992@gmail.com"
            className="contact-link"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <span className="contact-link__label">Email</span>
            <span className="contact-link__value">panchalshubham1992@gmail.com</span>
          </motion.a>

          <motion.a
            href="tel:+918128757405"
            className="contact-link"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <span className="contact-link__label">Phone</span>
            <span className="contact-link__value">+91 81287 57405</span>
          </motion.a>
        </div>

        <div className="contact-card__cta">
          <motion.a
            href="#projects"
            className="button button--primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore projects
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shubhampanchal1992/"
            className="button button--ghost"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Connect on LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  );
}
