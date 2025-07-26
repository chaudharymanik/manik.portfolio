"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Cloud, Zap, Brain, Database } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const projects = [
    {
      title: "DevMetric",
      description:
        "AI-powered Resume, GitHub and LeetCode analyzer using Gemini AI to provide insights on coding patterns and performance metrics.",
      tech: ["React", "Node.js", "Gemini AI", "MongoDB", "Chart.js"],
      category: "AI/Analytics",
      icon: Brain,
      color: "from-[#facc15] to-[#5eead4]",
      features: ["AI-powered code analysis", "Performance tracking", "Visual dashboards", "GitHub integration", "Resume ATS scoring"],
      github: "https://github.com/chaudharymanik/DevMetrics",
    },
    {
      title: "Mess Management System",
      description:
        "Visual dashboard system for tracking and reducing food waste in institutional mess halls with real-time analytics.",
      tech: ["React", "Node.js", "MySQL", "Chart.js", "Express"],
      category: "Full Stack",
      icon: Database,
      color: "from-[#5eead4] to-[#4ade80]",
      features: ["Real-time analytics", "Waste tracking", "Inventory management", "Reporting system"],
      github: "https://github.com/chaudharymanik/VIT-Mess-Management",
    },
    {
      title: "Session Manager",
      description:
        "Advanced session management system with JWT authentication, automatic timeout features, and security monitoring.",
      tech: ["Node.js", "JWT", "Redis", "Express", "MongoDB"],
      category: "Backend/Security",
      icon: Cloud,
      color: "from-[#5eead4] to-[#facc15]",
      features: ["JWT authentication", "Auto timeout", "Security monitoring", "Session analytics"],
      github: "https://github.com/chaudharymanik/POC-Session-Management",
    },
    {
      title: "XML to MySQL Cronjob",
      description:
        "Automated data synchronization system using cron jobs to parse XML data and sync with MySQL databases efficiently.",
      tech: ["Python", "MySQL", "Cron", "XML Parser", "Automation"],
      category: "Cloud/Automation",
      icon: Zap,
      color: "from-[#facc15] to-[#4ade80]",
      features: ["Automated syncing", "Error handling", "Data validation", "Performance monitoring"],
      github: "https://github.com/chaudharymanik/Cronjob",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5eead4] to-[#facc15] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5eead4] to-[#facc15] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-[#1c1f1f]/50 backdrop-blur-sm border border-[#1c1f1f] rounded-2xl overflow-hidden hover:border-[#5eead4]/50 transition-all duration-300">
                {/* Category Badge */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-[#0e0f0f] flex items-center`}
                    >
                      <project.icon className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#f5f5f4] mb-3 group-hover:text-[#5eead4] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#f5f5f4] mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#888888] mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-[#888888]">
                          <span className="w-1 h-1 bg-[#5eead4] rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#1c1f1f] text-[#f5f5f4] rounded text-xs hover:bg-[#1c1f1f]/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button - Only GitHub */}
                  <div className="flex">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-4 py-2 bg-[#1c1f1f] hover:bg-[#1c1f1f]/80 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </motion.a>
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
