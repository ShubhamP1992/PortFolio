import React from 'react';

export default function Contact() {
  return (
    <section
  id="contact"
  style={{
    padding: '4rem 1rem',
    background: '#f0f0f0',
    textAlign: 'center',
  }}
>
  <h2>Contact</h2>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
    <p>
      Email : <a href="mailto:panchalshubham1992@gmail.com">panchalshubham1992@gmail.com</a>
    </p>
    <p>Mobile No. : +91 8128757405</p>
  </div>
</section>

  );
}