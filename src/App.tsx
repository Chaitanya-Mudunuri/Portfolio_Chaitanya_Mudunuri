import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { portfolioData } from './data/portfolioData';

export function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      <main style={{ paddingTop: '5rem' }}>
        <Hero />

        <section id="about" style={{ padding: '6rem 1rem', maxWidth: '64rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>About Me</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7 }}>
            I am an AI & Data Science Engineer currently contributing at Accenture, with a strong academic foundation from my B.Tech in CSE (AI & Data Science). My expertise spans computer vision, dense crowd facial recognition systems, multi-modal security authentication, and IoT-driven environmental monitoring.
          </p>
        </section>

        <section id="experience" style={{ padding: '6rem 1rem', maxWidth: '64rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>Experience</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.role}</h3>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#38bdf8', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(56, 189, 248, 0.1)' }}>{exp.company}</span>
                </div>
                {exp.period && <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontFamily: 'monospace' }}>{exp.period}</p>}
                <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" style={{ padding: '6rem 1rem', maxWidth: '64rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{proj.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem', lineHeight: 1.6 }}>{proj.description}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '0.75rem', fontFamily: 'monospace', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#38bdf8' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" style={{ padding: '6rem 1rem', maxWidth: '64rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>Skills & Proficiencies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {portfolioData.skills.map((cat, idx) => (
              <div key={idx} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: '#38bdf8', fontFamily: 'monospace' }}>{cat.category}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem', fontWeight: 500 }}>
                        <span>{skill.name}</span>
                        <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{skill.level}%</span>
                      </div>
                      <div style={{ width: '100%', height: '0.5rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: 'linear-gradient(to right, #38bdf8, #818cf8)', borderRadius: '9999px', width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" style={{ padding: '6rem 1rem', maxWidth: '64rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '2rem' }}>Research & Publications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.publications.map((pub, idx) => (
              <div key={idx} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{pub.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{pub.authors}</p>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1rem' }}>{pub.venue}</p>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#38bdf8', textDecoration: 'none' }}>
                    View Publication &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ padding: '6rem 1rem', maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Interested in collaboration, AI research, or software engineering opportunities?</p>
          <a href={`mailto:${portfolioData.profile.email}`} style={{ padding: '1rem 2rem', borderRadius: '9999px', backgroundColor: '#38bdf8', color: '#ffffff', fontWeight: 500, textDecoration: 'none', display: 'inline-block', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.3)' }}>
            {portfolioData.profile.email}
          </a>
        </section>
      </main>

      <footer style={{ padding: '3rem 1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
        © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
