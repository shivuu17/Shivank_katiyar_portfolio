import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { MatrixRain } from './components/MatrixRain';
import { Certifications } from './components/Certifications';

type ThemeMode = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme') as ThemeMode | null;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const nextTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : prefersLight ? 'light' : 'dark';

    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const isDarkTheme = theme === 'dark';

  return (
    <div className={isDarkTheme ? 'min-h-screen bg-black text-white relative' : 'min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] relative'}>
      <MatrixRain theme={theme} />
      <div className="relative z-10">
        <Navigation theme={theme} onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))} />
        <Hero />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
        
        <footer className={isDarkTheme ? 'bg-black border-t border-cyan-500/30 py-8' : 'bg-[color:var(--background)] border-t border-[color:var(--border)] py-8'}>
          <div className="container mx-auto px-4 text-center">
            <p className={isDarkTheme ? 'text-gray-400 font-mono' : 'text-[color:var(--muted-foreground)] font-mono'}>
              <span className="text-cyan-400">©</span> 2025 
              <span className="text-green-400"> Shivank Katiyar</span>
              <span className={isDarkTheme ? 'text-gray-600' : 'text-[color:var(--muted-foreground)]'}> // All rights reserved</span>
            </p>
            <p className={isDarkTheme ? 'text-gray-600 font-mono text-sm mt-2' : 'text-[color:var(--muted-foreground)] font-mono text-sm mt-2'}>
              <span className="text-purple-400">console.log</span>
              <span className="text-white">(</span>
              <span className="text-yellow-400">"Made with 💚 and lots of ☕"</span>
              <span className="text-white">);</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}