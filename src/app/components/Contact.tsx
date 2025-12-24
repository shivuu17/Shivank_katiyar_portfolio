import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-400"></div>
              <MessageSquare className="w-10 h-10 text-green-400" />
              <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                contact.me()
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
            <p className="text-xl text-gray-400 font-mono">// Let's build something amazing together</p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/30 p-6 rounded-lg hover:border-cyan-400 transition-all">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full blur-sm group-hover:blur-md transition-all" />
                  
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-mono mb-1">EMAIL_ADDRESS</p>
                      <a 
                        href="mailto:katiyarshivank22@gmail.com" 
                        className="text-lg text-cyan-400 hover:text-green-400 transition-colors font-mono"
                      >
                        katiyarshivank927@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-green-500/30 p-6 rounded-lg hover:border-green-400 transition-all">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full blur-sm group-hover:blur-md transition-all" />
                  
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-mono mb-1">PHONE_NUMBER</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-lg text-green-400 hover:text-cyan-400 transition-colors font-mono"
                      >
                        +91 9956208289
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-purple-500/30 p-6 rounded-lg hover:border-purple-400 transition-all">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full blur-sm group-hover:blur-md transition-all" />
                  
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-mono mb-1">LOCATION</p>
                      <p className="text-lg text-purple-400 font-mono">Gautam Budh Nagar, UP, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                href="https://github.com/Shivuu17"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: -10 }}
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-gray-700 p-6 rounded-lg hover:border-cyan-400 transition-all overflow-hidden">
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full blur-sm group-hover:blur-md transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="p-4 bg-gray-800 group-hover:bg-gray-700 rounded-lg transition-all">
                      <Github className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-mono mb-1">GITHUB_PROFILE</p>
                      <p className="text-lg text-cyan-400 group-hover:text-green-400 transition-colors font-mono">
                        github.com/Shivuu17
                      </p>
                    </div>
                    <Send className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                href="https://linkedin.com/in/shivank-katiyar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: -10 }}
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-black border-2 border-gray-700 p-6 rounded-lg hover:border-blue-400 transition-all overflow-hidden">
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full blur-sm group-hover:blur-md transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="p-4 bg-gray-800 group-hover:bg-blue-900/30 rounded-lg transition-all">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-mono mb-1">LINKEDIN_PROFILE</p>
                      <p className="text-lg text-blue-400 group-hover:text-cyan-400 transition-colors font-mono">
                        linkedin.com/in/shivank-katiyar
                      </p>
                    </div>
                    <Send className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, x: -10 }}
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-gray-900 via-green-900/20 to-black border-2 border-gray-700 p-6 rounded-lg hover:border-green-400 transition-all overflow-hidden">
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full blur-sm group-hover:blur-md transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-all" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="p-4 bg-gray-800 group-hover:bg-green-900/30 rounded-lg transition-all">
                      <Download className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 font-mono mb-1">DOWNLOAD_RESUME</p>
                      <p className="text-lg text-green-400 group-hover:text-cyan-400 transition-colors font-mono">
                        resume.pdf
                      </p>
                    </div>
                    <Send className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-purple-500/20 blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-cyan-500/30 p-8 md:p-12 rounded-xl text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-20 h-20 border-2 border-cyan-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 left-4 w-16 h-16 border-2 border-green-500/20 rounded-full"
              />
              
              <h3 className="text-3xl md:text-4xl font-mono mb-4">
                <span className="text-cyan-400">while</span>
                <span className="text-white">(</span>
                <span className="text-green-400">looking_for_opportunities</span>
                <span className="text-white">) {`{`}</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-mono">
                <span className="text-purple-400">connect</span>
                <span className="text-white">(</span>
                <span className="text-yellow-400">"Let's collaborate on amazing projects!"</span>
                <span className="text-white">);</span>
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:katiyarshivank22@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500 text-black px-8 py-4 rounded-lg font-mono font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Email
                <Send className="w-5 h-5" />
              </motion.a>
              <p className="text-gray-400 font-mono mt-6 text-sm">
                <span className="text-white">{`}`}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}