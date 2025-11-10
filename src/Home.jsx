import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <motion.div
        className="hero__badge"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.span
          className="hero__badge-icon"
          aria-hidden="true"
          initial={{ rotate: -6, scale: 0.95 }}
          animate={{ rotate: [-6, 6, -6], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🚀
        </motion.span>
        <span className="hero__badge-text">
          <span className="hero__badge-text-strong">Available for full-time opportunities</span>
          <span className="hero__badge-text-sub">Ready to elevate enterprise .NET platforms</span>
        </span>
      </motion.div>

      <motion.h1
        className="hero__title"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Designing dependable web platforms with&nbsp;
        <span className="hero__title-highlight">.NET</span> and crafted frontends
      </motion.h1>

      <motion.p
        className="hero__subtitle"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        I’m Shubham Panchal, a results-driven .NET developer focused on scalable backends, secure authentication,
        and responsive user journeys. I love pairing optimized SQL and API design with expressive interfaces that
        help product teams move faster.
      </motion.p>

      <motion.div
        className="hero__cta"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#projects" className="button button--primary">
          View My Work
        </a>
        <a href="#contact" className="button button--ghost">
          Let’s Collaborate
        </a>
      </motion.div>

      <div className="hero__grid">
        {[
          { label: 'Performance uplift delivered', value: '30%' },
          { label: 'Manual effort automated', value: '40%' },
          { label: 'Industry segments supported', value: '2' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="stat-card__value">{stat.value}</span>
            <span className="stat-card__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
