"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, Database, Cloud, Wrench } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [activeTab, setActiveTab] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend & UI",
      icon: Code,
      color: "from-[#5eead4] to-[#4ade80]",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
      ],
    },
    backend: {
      title: "Backend & Database",
      icon: Database,
      color: "from-[#facc15] to-[#5eead4]",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "MySQL", level: 85, icon: "🐬" },
        { name: "Express.js", level: 85, icon: "⚡" },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-[#5eead4] to-[#facc15]",
      skills: [
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Docker", level: 65, icon: "🐳" },
        { name: "Git/GitHub", level: 90, icon: "🔧" },
        { name: "Linux", level: 75, icon: "🐧" },
        { name: "CI/CD", level: 60, icon: "🔄" },
      ],
    },
    tools: {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-[#facc15] to-[#4ade80]",
      skills: [
        { name: "Gemini AI", level: 75, icon: "🤖" },
        { name: "Cron Jobs", level: 80, icon: "⏰" },
        { name: "JWT", level: 85, icon: "🔐" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "Automation", level: 85, icon: "⚙️" },
      ],
    },
  }

  const tabs = Object.keys(skillCategories)

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5eead4] to-[#facc15] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5eead4] to-[#facc15] mx-auto rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 gap-2"
        >
          {tabs.map((tab) => {
            const category = skillCategories[tab as keyof typeof skillCategories]
            return (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? `bg-gradient-to-r ${category.color} text-[#0e0f0f] shadow-lg`
                    : "bg-[#1c1f1f] text-[#f5f5f4] hover:bg-[#1c1f1f]/80"
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.title}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1c1f1f]/50 backdrop-blur-sm border border-[#1c1f1f] rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-[#f5f5f4]">{skill.name}</span>
                  </div>
                  <span className="text-[#888888] font-medium">{skill.level}%</span>
                </div>

                <div className="relative">
                  <div className="w-full bg-[#1c1f1f] rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeTab as keyof typeof skillCategories].color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        {/* Removed Passionate about section as requested */}
      </div>
    </section>
  )
}
