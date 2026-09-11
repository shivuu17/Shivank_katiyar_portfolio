import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MatrixRain } from './components/MatrixRain';

const Education = lazy(() => import('./components/Education').then(({ Education }) => ({ default: Education })));
const Experience = lazy(() => import('./components/Experience').then(({ Experience }) => ({ default: Experience })));
const Projects = lazy(() => import('./components/Projects').then(({ Projects }) => ({ default: Projects })));
const Certifications = lazy(() => import('./components/Certifications').then(({ Certifications }) => ({ default: Certifications })));
const Contact = lazy(() => import('./components/Contact').then(({ Contact }) => ({ default: Contact })));

function SectionSkeleton() {
  return (
    <div className="section-skeleton" aria-label="Loading portfolio content">
      <div className="skeleton-line skeleton-line--title" />
      <div className="skeleton-line" />
      <div className="skeleton-grid">
        <div className="skeleton-card" />
        <div className="skeleton-card" />
      </div>
    </div>
  );
}

type ThemeMode = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback ?? ((callback: IdleRequestCallback) => window.setTimeout(callback, 0));
    const cancelIdleCallback = window.cancelIdleCallback ?? ((id: number) => window.clearTimeout(id));
    const taskId = idleCallback(() => setShowSections(true));

    return () => cancelIdleCallback(taskId as number);
  }, []);

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
        {showSections ? (
          <Suspense fallback={<SectionSkeleton />}>
            <Education />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </Suspense>
        ) : <SectionSkeleton />}
        
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