import React from 'react';
import { Navbar } from './components/Navbar';
import { portfolioData } from './data/portfolioData';

export function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="pt-28">
        <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            {portfolioData.profile.affiliation} • AI & Data Science
          </div>
          <h1 className="text-4xl md:text-7xl font-syne font-extrabold tracking-tight max-w-4xl mb-6">
            {portfolioData.profile.name}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-8 font-light">
            {portfolioData.profile.role} specializing in computer vision, deep learning, and robust IoT architectures.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20">
              Explore Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-[var(--border-color)] hover:border-sky-500/50 transition-all font-medium">
              Get in Touch
            </a>
          </div>
        </section>

        <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-syne font-bold mb-8">About Me</h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            I am an AI & Data Science Engineer currently contributing at Accenture, with a strong academic foundation from my B.Tech in CSE (AI & Data Science). My expertise spans computer vision, dense crowd facial recognition systems, multi-modal security authentication, and IoT-driven environmental monitoring.
          </p>
        </section>

        <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-syne font-bold mb-8">Experience</h2>
          <div className="grid gap-6">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-xs font-mono text-sky-500 px-2.5 py-1 rounded-full bg-sky-500/10">{exp.company}</span>
                </div>
                {exp.period && <p className="text-sm text-[var(--text-secondary)] mb-3 font-mono">{exp.period}</p>}
                <p className="text-[var(--text-secondary)]">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-syne font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between hover:border-sky-500/40 transition-all">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{proj.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-syne font-bold mb-8">Skills & Proficiencies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.skills.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                <h3 className="text-lg font-semibold mb-4 text-sky-400 font-mono">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between text-sm mb-1 font-medium">
                        <span>{skill.name}</span>
                        <span className="text-[var(--text-secondary)] font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="py-24 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-syne font-bold mb-8">Research & Publications</h2>
          <div className="space-y-6">
            {portfolioData.publications.map((pub, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2 font-mono">{pub.authors}</p>
                <p className="text-sm text-gray-400 mb-4">{pub.venue}</p>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:underline">
                    View Publication &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-syne font-bold mb-4">Let's Connect</h2>
          <p className="text-[var(--text-secondary)] mb-8">Interested in collaboration, AI research, or software engineering opportunities?</p>
          <a href={`mailto:${portfolioData.profile.email}`} className="px-8 py-4 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20 inline-block">
            {portfolioData.profile.email}
          </a>
        </section>
      </main>

      <footer className="py-12 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-secondary)] font-mono">
        © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
      </footer>
    </div>
  )
}

export default App
