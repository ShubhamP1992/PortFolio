// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you have any project in mind or want to connect, feel free to drop a message.</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
