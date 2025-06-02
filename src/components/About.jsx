// src/components/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Results-driven and detail-oriented .NET Developer with hands-on experience in designing, developing, and maintaining robust web
          applications using C#, .NET Core, and ASP.NET MVC. Proficient in building dynamic and responsive user interfaces with JavaScript,
          jQuery, HTML, CSS, and AJAX. Adept at implementing secure and scalable backend systems using Entity Framework and RESTful APIs.
        </p>
        <p>
          Experienced in integrating Keycloak for authentication and identity management, ensuring secure access control across applications.
        </p>
      </div>
    </section>
  );
}

export default About;
