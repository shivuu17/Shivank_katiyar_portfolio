import { motion } from 'motion/react';
import { Briefcase, Code, Calendar, Sparkles, Zap, FolderGit2 } from 'lucide-react';

const experiences = [
  {
    role: "QA Testing Intern",
    company: "HyperCloud Digital Solutions",
    period: "July 2025 - Oct 2025",
    type: "Internship",
    description: "Performed comprehensive quality assurance testing for digital solutions",
    achievements: [
      "Performed end-to-end tests and identified functionality issues",
      "Verified bug fixes and classified issues systematically",
      "Ensured functionality, usability across different platforms",
      "Collaborated with developers to maintain high-quality releases"
    ],
    tech: ["Testing", "QA", "Bug Tracking", "Cross-Platform Testing"]
  }
];

const projects = [
  {
    name: "Library Management System",
    description: "Library management tool built with Python and SQL",
    features: [
      "Book cataloging and management",
      "Member records tracking",
      "Transaction tracking system",
      "Fine management functionality"
    ],
    tech: ["Python", "SQL", "Database Design"]
  },
  {
    name: "FlexxWell ",
    description: "Responsive web application for workload planning",
    features: [
      "Responsive web design",
      "User login and authentication",
      "Workload planning features",
    ],
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

const skills = [
  { 
    category: "Languages", 
    icon: "💻",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "C", "C++", "Java"],
    color: "cyan"
  },
  { 
    category: "Web Tech", 
    icon: "🌐",
    items: ["HTML", "CSS", "MySQL", "JavaScript", "Replit", "APIs", "ChatGPT "],
    color: "green"
  },
  { 
    category: "Tools", 
    icon: "🛠️",
    items: ["Figma", "MS Office", "Excel", "Workbench", "Replit", "Git", "PowerBI", "VS Code", "ChatGPT", "Github "],
    color: "purple"
  },
  { 
    category: "Skills", 
    icon: "🧠",
    items: ["Data Analysis", "E-Commerce", "Problem Solving", "Communication", "Market Research", "Strategic Thinking"],
    color: "pink"
  }
];

const colorMap = {
  cyan: "from-cyan-500 to-blue-500",
  green: "from-green-500 to-emerald-500",
  purple: "from-purple-500 to-pink-500",
  pink: "from-pink-500 to-rose-500"
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
      
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
              <Briefcase className="w-10 h-10 text-green-400" />
              <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                experience.json
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
            <p className="text-xl text-gray-400 font-mono">// Where I've worked & learned</p>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-green-500/30 rounded-lg p-8 hover:border-green-400/50 transition-all">
                {/* Type badge */}
                <div className="absolute -top-3 -right-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full font-mono text-sm text-black font-bold flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    {exp.type}
                  </motion.div>
                </div>

                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-mono text-green-400 mb-2">
                      <span className="text-gray-500">function</span> {exp.role}()
                    </h3>
                    <p className="text-xl text-cyan-400 font-mono">// {exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 font-mono text-sm border-l-2 border-cyan-500 pl-4">
                  {exp.description}
                </p>
                
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-mono text-yellow-400 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 font-mono text-sm"
                      >
                        <span className="text-green-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-black/50 border border-cyan-500/30 text-cyan-400 rounded-md font-mono text-xs hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
                <FolderGit2 className="w-10 h-10 text-purple-400" />
                <h3 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  projects[]
                </h3>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 p-6 rounded-lg hover:border-purple-400 transition-all">
                  <h4 className="text-2xl font-mono text-purple-400 mb-3">{project.name}</h4>
                  <p className="text-gray-300 font-mono text-sm mb-4 border-l-2 border-purple-500 pl-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-400 font-mono text-xs">
                        <span className="text-purple-400">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-black/50 text-purple-300 rounded text-xs font-mono border border-purple-700 hover:border-purple-400 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <Code className="w-10 h-10 text-cyan-400" />
                <h3 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  skills.db
                </h3>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${colorMap[skillGroup.color as keyof typeof colorMap]} rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
                
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6 rounded-lg hover:border-cyan-400 transition-all">
                  <div className="text-4xl mb-3 text-center">{skillGroup.icon}</div>
                  <h4 className={`text-xl font-mono mb-4 text-center bg-gradient-to-r ${colorMap[skillGroup.color as keyof typeof colorMap]} text-transparent bg-clip-text`}>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-black/50 text-gray-300 rounded text-xs font-mono border border-gray-700 hover:border-cyan-400 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
