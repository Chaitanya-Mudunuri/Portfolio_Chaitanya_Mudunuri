import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';

export const Hero: React.FC = () => {
  const [typedName, setTypedName] = useState('');
  const fullName = portfolioData.profile.name;

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      if (idx <= fullName.length) {
        setTypedName(fullName.slice(0, idx));
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullName]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
          {portfolioData.profile.affiliation} • AI & Data Science Engineer
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-syne font-extrabold tracking-tight mb-6">
          {typedName}
          <span className="animate-pulse text-sky-500">_</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-10 font-light leading-relaxed">
          Building high-precision computer vision systems, deep learning architectures, and intelligent IoT analytics.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/25 hover:scale-105 active:scale-95"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-sky-500/50 transition-all font-medium hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
