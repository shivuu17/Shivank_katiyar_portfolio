import { motion } from 'motion/react';
import { Award, BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Great Powered Data Analysis",
    issuer: "EXL M",
    category: "Data Science"
  },
  {
    name: "Digital Marketing",
    issuer: "EXL M",
    category: "Marketing"
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    category: "Networking"
  },
  {
    name: "Entrepreneurship",
    issuer: "NPTEL B.T Nawas",
    category: "Business"
  },
  {
    name: "HTML Training and Certification",
    issuer: "Certificate Provider",
    category: "Web Development"
  },
  {
    name: "C & C++ Internship",
    issuer: "Coding Blocks",
    category: "Programming"
  },
  {
    name: "The Complete Java Developer Internship",
    issuer: "Eduskills & AICTE",
    category: "Programming"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
      
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
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <Award className="w-10 h-10 text-yellow-400" />
              <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                certifications.list
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <p className="text-xl text-gray-400 font-mono">// My professional certifications</p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400/50 transition-all">
                  {/* Certificate badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Certificate info */}
                  <div>
                    <div className="mb-2">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-mono border border-yellow-500/30">
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-mono text-yellow-400 mb-3 min-h-[3rem] leading-tight">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                      <span className="text-cyan-400">issued_by:</span>
                      <span>"{cert.issuer}"</span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-500/20 group-hover:border-yellow-400/50 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/30 rounded-lg p-6">
              <p className="text-gray-300 font-mono">
                <span className="text-yellow-400">const</span>
                <span className="text-white"> totalCertifications = </span>
                <span className="text-green-400">{certifications.length}</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-gray-400 font-mono text-sm mt-2">
                // Constantly learning and growing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
