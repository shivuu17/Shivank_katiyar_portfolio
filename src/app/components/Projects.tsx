import { motion } from 'motion/react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "SK Body First Gym",
    description: "A modern React-based gym website showcasing gym facilities, owner details, contact information, membership plans, and class schedules. Fully responsive design hosted on Firebase for reliable and fast delivery.",
    features: [
      "Responsive gym facility showcase with high-quality imagery",
      "Gym owner and staff profile pages with detailed contact information",
      "Membership plans and pricing display with membership tiers",
      "Class schedule and trainer information with expertise details",
      "Contact form for inquiries, bookings, and customer support",
      "Firebase hosting for fast, reliable, and scalable deployment",
      "Mobile-first responsive design for all devices",
      "SEO-optimized structure for better visibility"
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Firebase Hosting", "Responsive Design", "Modern UI/UX"],
    link: "https://sk-body-first-gym.web.app/"
  },
  {
    title: "NEXT PROJECT WILL BE ADDED SOON",
    description: "Brief description of the project and what problem it solves.",
    features: [
      "Feature or achievement 1",
      "Feature or achievement 2",
      "Feature or achievement 3"
    ],
    tech: ["Technology 1", "Technology 2", "Technology 3"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <FolderGit2 className="w-10 h-10 text-cyan-400" />
              <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                projects.ts
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <p className="text-xl text-gray-400 font-mono">// Work that showcases my skills</p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-400/50 transition-all h-full flex flex-col">
                {/* Project Title with Link Button */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-mono text-cyan-400 flex-1">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 hover:from-cyan-500/30 hover:to-green-500/30 border border-cyan-400/30 hover:border-cyan-400 text-green-400 rounded transition-all font-mono text-sm"
                    title="View project"
                  >
                    <span>Click to view</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 font-mono text-sm border-l-2 border-green-500 pl-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-mono text-green-400 mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-400 font-mono text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-mono rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
