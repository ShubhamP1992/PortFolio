import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__brand">
          <span className="nav__brand-mark">SP</span>
          <span className="nav__brand-text">Shubham Panchal</span>
        </a>

        <nav className="nav__links">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav__link"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          className="nav__theme-toggle"
          onClick={onToggleTheme}
          whileTap={{ scale: 0.92 }}
          aria-live="polite"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <motion.span
            className="nav__theme-icon"
            layout
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <motion.span
              className="nav__theme-icon-sun"
              initial={false}
              animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.6 : 1 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="nav__theme-icon-moon"
              initial={false}
              animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.4, rotate: isDark ? 0 : -40 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="nav__theme-icon-orbit"
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.span>
          <span className="nav__theme-label">{isDark ? 'Dark' : 'Light'} mode</span>
        </motion.button>
      </div>
    </header>
  );
}