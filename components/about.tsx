"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Users, Trophy } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const stats = [
    { icon: GraduationCap, label: "CSE at VIT", value: "2027" },
    { icon: Users, label: "Team Leadership", value: "Mozilla Firefox Club" },
    { icon: Trophy, label: "Hackathons", value: "Multiple" },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5eead4] to-[#facc15] bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5eead4] to-[#facc15] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#f5f5f4] leading-relaxed">
              I'm a Computer Science Engineering student at VIT with a passion for
              <span className="text-[#5eead4] font-semibold"> cloud computing</span>,
              <span className="text-[#facc15] font-semibold"> data engineering</span>, and
              <span className="text-[#5eead4] font-semibold"> full-stack development</span>.
            </p>

            <p className="text-lg text-[#f5f5f4] leading-relaxed">
              Beyond coding, I'm actively involved in the{" "}
              <span className="text-[#facc15] font-semibold">Mozilla Firefox Club</span> as a designer, bringing
              creative solutions to technical challenges.
            </p>

            <p className="text-lg text-[#f5f5f4] leading-relaxed">
              I thrive in hackathons and collaborative environments, always eager to learn new technologies and build
              solutions that make a real impact. Currently pursuing AWS certification to deepen my cloud expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(94, 234, 212, 0.2)",
                }}
                className="bg-[#1c1f1f]/50 backdrop-blur-sm border border-[#1c1f1f] rounded-xl p-6 text-center hover:border-[#5eead4]/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-[#5eead4] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#f5f5f4] mb-1">{stat.value}</div>
                <div className="text-sm text-[#888888]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
