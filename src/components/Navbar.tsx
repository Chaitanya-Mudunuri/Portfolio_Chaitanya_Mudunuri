import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
    setTheme(currentTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'publications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {
      // ignore in private mode
    }

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        document.documentElement.setAttribute('data-theme', nextTheme);
      });
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'py-1' : 'py-3'}`}>
      <nav aria-label="Main Navigation" className={`flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 w-full max-w-5xl shadow-lg ${
        theme === 'dark'
          ? 'bg-[#12141c]/70 border-white/10 text-gray-200 shadow-black/40'
          : 'bg-white/80 border-black/10 text-gray-800 shadow-slate-200/50'
      }`}>
        <a href="#hero" className="font-syne font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          {portfolioData.profile.name.split(' ')[0]}<span className="text-sky-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-black/10 px-3 py-1 rounded-full border border-white/5 dark:border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'hover:text-sky-500 dark:hover:text-sky-400 opacity-80 hover:opacity-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="p-2.5 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:scale-105 active:scale-95 transition-transform"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className={`absolute top-20 left-4 right-4 p-6 rounded-2xl backdrop-blur-2xl border md:hidden shadow-2xl transition-all duration-300 ${
          theme === 'dark' ? 'bg-[#12141c]/95 border-white/10 text-gray-200' : 'bg-white/95 border-black/10 text-gray-800'
        }`}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium hover:bg-sky-500/10 hover:text-sky-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
