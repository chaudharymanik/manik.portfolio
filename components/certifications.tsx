"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      title: "Web Development Certification",
      issuer: "Udemy",
      date: "2025",
      status: "Completed",
      description:
        "Comprehensive full-stack certification where I mastered modern web technologies and built production-ready applications that actually solve real problems.",
      skills: ["React", "Node.js", "Database Design", "API Development"],
      color: "from-[#5eead4] to-[#4ade80]",
      link: "https://www.udemy.com/certificate/UC-d102563b-1ab1-44bc-8770-33e0a6d57473/",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "2023",
      status: "Completed",
      description:
        "Deep dive into algorithmic thinking and problem-solving. This wasn't just about memorizing patterns - it was about understanding how to think like a computer scientist.",
      skills: ["Problem Solving", "Algorithms", "Data Structures", "Optimization"],
      color: "from-[#facc15] to-[#5eead4]",
      link: "https://ude.my/UC-41d2a06c-1eb0-470f-af22-dd4afe4f1270",
    },
    {
      title: "Deloitte - Data Analytics Job Simulation",
      issuer: "Forage",
      date: "2025",
      status: "Completed",
      description:
        "Real-world business simulation where I tackled actual consulting challenges. Got to experience what it's like to solve problems for Fortune 500 companies.",
      skills: ["Data Analysis", "Business Intelligence", "Consulting", "Strategic Thinking"],
      color: "from-[#5eead4] to-[#facc15]",
      link: "/Deloitte Certificate.pdf",
    },
    {
      title: "AWS Developer Certification",
      issuer: "Amazon Web Services",
      date: "2025",
      status: "Completed",
      description:
        "Advanced AWS certification focusing on developing and maintaining applications on AWS platform with hands-on cloud architecture experience.",
      skills: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation", "DevOps"],
      color: "from-[#facc15] to-[#4ade80]",
      link: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5eead4] to-[#facc15] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5eead4] to-[#facc15] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-[#1c1f1f]/50 backdrop-blur-sm border border-[#1c1f1f] rounded-2xl p-6 hover:border-[#5eead4]/50 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                      <Award className="w-6 h-6 text-[#0e0f0f]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#f5f5f4] group-hover:text-[#5eead4] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[#888888] text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center text-[#888888] text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                    <div className="flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-[#5eead4]/20 text-[#5eead4]">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {cert.status}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#f5f5f4] mb-4 leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-[#f5f5f4] font-semibold mb-2 text-sm">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-[#1c1f1f] text-[#f5f5f4] rounded text-xs hover:bg-[#1c1f1f]/80 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${cert.color} rounded-lg text-sm font-medium text-[#0e0f0f] transition-all hover:shadow-lg`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="text-center p-6 bg-[#1c1f1f]/30 rounded-xl border border-[#1c1f1f]">
            <div className="text-3xl font-bold text-[#5eead4] mb-2">4</div>
            <div className="text-[#888888]">Completed</div>
          </div>
          <div className="text-center p-6 bg-[#1c1f1f]/30 rounded-xl border border-[#1c1f1f]">
            <div className="text-3xl font-bold text-[#facc15] mb-2">15+</div>
            <div className="text-[#888888]">Skills Acquired</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
