import React from 'react';

export default function Home() {
  return (
    <section id="home" style={{ padding: '4rem 1rem', textAlign: 'center', background: '#fff' }}>
      <h1 className="typing-effect" style={{ fontSize: '2rem' }}>Hi, I'm Shubham Panchal</h1>
      <p>.NET Core Developer | ReactJS Enthusiast</p>

      {/* Add style block if not using external CSS */}
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 23ch; }
        }
        @keyframes blinkCaret {
          0%, 100% { border-color: transparent; }
          50% { border-color: black; }
        }
        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid black;
          animation:
            typing 3s steps(23, end),
            blinkCaret 0.75s step-end infinite;
          width: 23ch;
          margin: 0 auto;
          font-family: monospace;
        }
      `}</style>
    </section>
  );
}
