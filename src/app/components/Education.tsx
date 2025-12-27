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
    gpa: "ON GOING",
    achievements: [
      "SGPA of 8.15 4th Semester",
      "Active member of Computer Science Club",
      "Participated in multiple hackathons",
      "Strong foundation in programming and full-stack development",
    ],
    courses: [
      "Data Science",
      "Algorithms",
      "Machine Learning",
      "Web Development",
      "Data Warehousing",
      "Software Testing",
    ],
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "GD Goenka Global School | CBSE",
    period: "2022 - 2023",
    gpa: "PASS",
    achievements: [
      "Completed with strong academic distinction.",
      "Strong foundation in core subjects",
      "Active participation in school activities",
    ],
    courses: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Chemistry",
    ],
  },
  {
    degree: "High School (10th Grade)",
    institution: "JSM Public School | CBSE",
    period: "2020 - 2021",
    gpa: "Pass",
    achievements: [
      "Successfully completed high school education",
      "Developed interest in Computer Science",
      "Participated in school tech events",
    ],
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
    ],
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

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
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <GraduationCap className="w-10 h-10 text-cyan-400" />
              <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                education.log
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <p className="text-xl text-gray-400 font-mono">
              // My academic journey
            </p>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative"
            >
              {/* Code block style */}
              <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all shadow-lg hover:shadow-cyan-500/20">
                {/* Line numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-800/50 border-r border-cyan-500/30 flex flex-col items-center py-4 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <span
                      key={num}
                      className="text-gray-600 font-mono text-xs"
                    >
                      {num}
                    </span>
                  ))}
                </div>

                <div className="pl-16 pr-8 py-6">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-purple-400 font-mono">
                          class
                        </span>
                        <h3 className="text-2xl font-mono text-cyan-400">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-xl text-green-400 font-mono">
                        @ {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-2 font-mono">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-cyan-400 font-mono font-bold">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <h4 className="text-lg font-mono text-yellow-400">
                          achievements[]
                        </h4>
                      </div>
                      <div className="space-y-2 font-mono text-sm">
                        {edu.achievements.map(
                          (achievement, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-cyan-400">
                                ✓
                              </span>
                              <span>{achievement}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-green-400" />
                        <h4 className="text-lg font-mono text-green-400">
                          courses[]
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-gray-800 border border-cyan-500/30 text-cyan-400 rounded font-mono text-sm hover:border-cyan-400 transition-all"
                          >
                            {course}
                          </motion.span>
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
