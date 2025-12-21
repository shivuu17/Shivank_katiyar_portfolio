import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { MatrixRain } from './components/MatrixRain';
import { Certifications } from './components/Certifications';

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <MatrixRain />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
        
        <footer className="bg-black border-t border-cyan-500/30 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 font-mono">
              <span className="text-cyan-400">©</span> 2025 
              <span className="text-green-400"> Shivank Katiyar</span>
              <span className="text-gray-600"> // All rights reserved</span>
            </p>
            <p className="text-gray-600 font-mono text-sm mt-2">
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