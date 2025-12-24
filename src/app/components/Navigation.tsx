import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Mail, Download, Terminal } from 'lucide-react';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-cyan-500/30 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center gap-2"
          >
            <Terminal className="w-6 h-6 text-cyan-400" />
            <h1 className="text-xl font-mono text-cyan-400">
              <span className="text-green-400">~/</span>portfolio
            </h1>
          </motion.div>
          
          <div className="flex gap-6 items-center font-mono">
            <button
              onClick={() => scrollToSection('education')}
              className="flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors group"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="group-hover:underline">./education</span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors group"
            >
              <Briefcase className="w-4 h-4" />
              <span className="group-hover:underline">./experience</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="group-hover:underline">./contact</span>
            </button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-green-500 text-black px-4 py-2 rounded font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>download_cv()</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}