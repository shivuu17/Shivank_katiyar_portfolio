import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Terminal, Code2, Cpu } from 'lucide-react';
import { TerminalText } from './TerminalText';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ opacity: Math.random() * 0.5 + 0.2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-cyan-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono ml-4">bash - portfolio@main</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm space-y-4">
              <div className="space-y-2">
                <div className="text-green-400">
                  <span className="text-cyan-400">guest@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ cat introduction.txt</span>
                </div>
                
                <div className="pl-4 space-y-3 text-lg md:text-2xl">
                  <div className="text-cyan-400">
                    <TerminalText text="Hello World! I'm Shivank Katiyar 👋" delay={500} />
                  </div>
                  <div className="text-green-400">
                    <TerminalText text="BCA Student & Full-Stack Developer" delay={2000} />
                  </div>
                  <div className="text-purple-400">
                    <TerminalText text="Building the future, one line at a time..." delay={3500} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-6">
                <div className="text-green-400">
                  <span className="text-cyan-400">guest@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ ./about_me.sh</span>
                </div>
                
                <div className="pl-4 text-gray-300 space-y-2">
                  <p className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    Dedicated BCA student with strong skills in programming and databases
                  </p>
                  <p className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-green-400" />
                    Expertise in Web Technologies and Database Management
                  </p>
                  <p className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    Constantly developing skills in coding and full-stack development
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-6">
                <div className="text-green-400">
                  <span className="text-cyan-400">guest@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ ls socials/</span>
                </div>
                
                <div className="pl-4 flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Shivank-Katiyar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-cyan-500/30 rounded hover:border-cyan-400 transition-all"
                  >
                    <Github className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 group-hover:text-green-400">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-cyan-500/30 rounded hover:border-cyan-400 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 group-hover:text-green-400">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:katiyarshivank22@gmail.com"
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-cyan-500/30 rounded hover:border-cyan-400 transition-all"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 group-hover:text-green-400">Email</span>
                  </motion.a>
                </div>
              </div>

              <div className="pt-4">
                <div className="text-gray-500 flex items-center gap-2">
                  <span className="text-cyan-400">guest@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-cyan-400 ml-1"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code snippet decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-center text-cyan-400/50 font-mono text-sm"
          >
            <p>// Scroll down to explore my journey</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}