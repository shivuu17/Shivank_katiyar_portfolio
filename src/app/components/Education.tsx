import { motion } from "motion/react";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Galgotias University",
    period: "2023 - 2026",
    gpa: "Final Year",
    achievements: [
      "Focused on full-stack development and practical software projects",
      "Applied classroom concepts through freelancing and product delivery",
      "Built foundations in software engineering, web development, and testing"
    ],
    courses: [
      "Web Development",
      "Software Engineering",
      "Database Management Systems",
      "Computer Networks",
      "Software Testing",
    ],
  },
  {
    degree: "Class 12th - CBSE",
    institution: "GD Goenka Global School, Noida",
    period: "2022 - 2023",
    gpa: "Completed",
    achievements: [
      "Strong foundation in core subjects",
      "Prepared academic base for computer applications",
      "Completed senior secondary education under CBSE curriculum"
    ],
    courses: [
      "Computer Science",
      "Mathematics",
      "English",
      "Business Studies",
    ],
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-block">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                education.log
              </h2>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 font-mono">
              // My academic journey
            </p>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 0,
                y: 20,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Code block style */}
              <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all shadow-lg hover:shadow-cyan-500/20">
                {/* Line numbers - hidden on mobile */}
                <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-10 md:w-12 bg-gray-800/50 border-r border-cyan-500/30 py-4">
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    {[1, 2, 3, 4].map((num) => (
                      <span
                        key={num}
                        className="text-gray-600 font-mono text-xs"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pl-4 sm:pl-14 md:pl-16 pr-4 sm:pr-8 py-4 sm:py-6">
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2 flex-wrap">
                      <span className="text-purple-400 font-mono text-xs sm:text-sm">
                        class
                      </span>
                      <h3 className="text-base sm:text-xl md:text-2xl font-mono text-cyan-400 break-words">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-lg md:text-xl text-green-400 font-mono break-words">
                      @ {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 font-mono text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{edu.period}</span>
                      <span className="mx-2">•</span>
                      <span className="text-cyan-400 font-bold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 mt-4 sm:mt-6">
                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        <h4 className="text-sm sm:text-base md:text-lg font-mono text-yellow-400">
                          achievements[]
                        </h4>
                      </div>
                      <div className="space-y-2 font-mono text-xs sm:text-sm">
                        {edu.achievements.map(
                          (achievement, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-cyan-400 flex-shrink-0">
                                ✓
                              </span>
                              <span className="break-words">
                                {achievement}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                        <h4 className="text-sm sm:text-base md:text-lg font-mono text-green-400">
                          courses[]
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 bg-gray-800 border border-cyan-500/30 text-cyan-400 rounded font-mono text-xs sm:text-sm hover:border-cyan-400 transition-all"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}