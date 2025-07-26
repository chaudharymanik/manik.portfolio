"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building, Calendar, TrendingUp, Zap } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const experiences = [
    {
      company: "Introis Technologies",
      role: "Full Stack Development Intern",
      period: "Jun 2025 - Aug 2025",
      type: "Latest",
      description: "Developed comprehensive warranty management system for Exide Industries",
      achievements: [
        "Built end-to-end warranty tracking system using React & Node.js",
        "Implemented real-time dashboard with MongoDB integration",
        "Improved warranty processing efficiency by 35%",
        "Designed responsive UI/UX for mobile and desktop platforms",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      icon: Building,
      color: "from-[#5eead4] to-[#4ade80]",
    },
    {
      company: "Introis Technologies",
      role: "Automation Development Intern",
      period: "May 2025 - Jun 2025",
      type: "Automation Focus",
      description: "Specialized in process automation and data pipeline optimization",
      achievements: [
        "Developed automated data processing workflows",
        "Reduced manual processing time by 40%",
        "Implemented cron job scheduling for batch operations",
        "Created monitoring dashboards for system health",
      ],
      tech: ["Python", "Cron Jobs", "MySQL", "Automation Scripts"],
      icon: Zap,
      color: "from-[#facc15] to-[#5eead4]",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5eead4] to-[#facc15] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5eead4] to-[#facc15] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="bg-[#1c1f1f]/50 backdrop-blur-sm border border-[#1c1f1f] rounded-2xl p-8 hover:border-[#5eead4]/50 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                      <exp.icon className="w-6 h-6 text-[#0e0f0f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f5f5f4]">{exp.role}</h3>
                      <p className="text-[#5eead4] font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-[#888888]">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-[#0e0f0f]`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#f5f5f4] mb-6 text-lg">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-[#f5f5f4] font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#5eead4]" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="flex items-start text-[#f5f5f4]"
                      >
                        <span className="w-2 h-2 bg-[#5eead4] rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-[#f5f5f4] font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-[#1c1f1f] text-[#f5f5f4] rounded-lg text-sm hover:bg-[#1c1f1f]/80 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
