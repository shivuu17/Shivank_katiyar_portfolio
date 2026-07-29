import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Mail, Download, Terminal, Menu, X, FolderGit2, SunMoon } from 'lucide-react';
import { useState } from 'react';

type ThemeMode = 'dark' | 'light';

type NavigationProps = {
  theme: ThemeMode;
  onThemeToggle: () => void;
};

export function Navigation({ theme, onThemeToggle }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkTheme = theme === 'dark';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={isDarkTheme ? 'fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-cyan-500/30 z-50' : 'fixed top-0 left-0 right-0 bg-[color:var(--background)]/90 backdrop-blur-md border-b border-[color:var(--border)] z-50 shadow-sm'}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer flex items-center gap-2"
            >
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <h1 className="text-base sm:text-xl font-mono text-cyan-400">
                <span className="text-green-400">~/</span>
                <span className="hidden sm:inline">Shivank-Katiyar-portfolio</span>
                <span className="sm:hidden">portfolio</span>
              </h1>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center font-mono">
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
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors group"
              >
                <FolderGit2 className="w-4 h-4" />
                <span className="group-hover:underline">./projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 text-cyan-400 hover:text-green-400 transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">./contact</span>
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onThemeToggle}
                className={isDarkTheme ? 'inline-flex items-center justify-center size-10 rounded border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all' : 'inline-flex items-center justify-center size-10 rounded border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-all'}
                aria-label="Toggle light and dark theme"
                title="Toggle light and dark theme"
              >
                <SunMoon className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/RESUME_SHIVANK_KATIYAR.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-green-500 text-black px-4 py-2 rounded font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>download_cv()</span>
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isDarkTheme ? 'md:hidden p-2 text-cyan-400 hover:text-green-400 transition-colors' : 'md:hidden p-2 text-[color:var(--foreground)] hover:text-cyan-500 transition-colors'}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={isDarkTheme ? 'fixed right-0 top-0 bottom-0 w-[280px] bg-gray-900 border-l border-cyan-500/30 z-50 md:hidden overflow-y-auto' : 'fixed right-0 top-0 bottom-0 w-[280px] bg-[color:var(--background)] border-l border-[color:var(--border)] z-50 md:hidden overflow-y-auto shadow-2xl'}
            >
              {/* Menu Header */}
              <div className={isDarkTheme ? 'p-4 border-b border-cyan-500/30 flex items-center justify-between' : 'p-4 border-b border-[color:var(--border)] flex items-center justify-between'}>
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span className={isDarkTheme ? 'text-cyan-400 font-mono' : 'text-[color:var(--foreground)] font-mono'}>Menu</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={isDarkTheme ? 'p-2 text-cyan-400 hover:text-green-400 transition-colors' : 'p-2 text-[color:var(--foreground)] hover:text-cyan-500 transition-colors'}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2 font-mono">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-cyan-400 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-all group"
                >
                  <FolderGit2 className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">./projects</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('education')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-cyan-400 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-all group"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">./education</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('experience')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-cyan-400 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-all group"
                >
                  <Briefcase className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">./experience</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-cyan-400 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-all group"
                >
                  <FolderGit2 className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">./projects</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-cyan-400 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-all group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">./contact</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onThemeToggle}
                  className={isDarkTheme ? 'inline-flex items-center justify-center size-10 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all' : 'inline-flex items-center justify-center size-10 rounded-lg border border-[color:var(--border)] text-[color:var(--foreground)] hover:bg-[color:var(--accent)] transition-all'}
                  aria-label="Toggle light and dark theme"
                  title="Toggle light and dark theme"
                >
                  <SunMoon className="w-5 h-5" />
                </motion.button>

                <div className="pt-4">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="/RESUME_SHIVANK_KATIYAR.pdf"
                    download
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-green-500 text-black px-4 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <span>download_cv()</span>
                  </motion.a>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cyan-500/30">
                <p className={isDarkTheme ? 'text-gray-500 text-xs font-mono text-center' : 'text-[color:var(--muted-foreground)] text-xs font-mono text-center'}>
                  <span className="text-cyan-400">guest@portfolio</span>
                  <span className="text-white">:~$ </span>
                  <span className="text-green-400">menu.show()</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
