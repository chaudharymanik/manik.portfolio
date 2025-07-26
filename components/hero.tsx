"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronDown, Cloud, Server, Database } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Building scalable apps with a dash of data & cloud."

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 right-20 opacity-20"
        style={{ color: "#5eead4" }}
      >
        <Cloud size={80} />
      </motion.div>

      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 opacity-20"
        style={{ color: "#facc15" }}
      >
        <Server size={60} />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/2 left-10 opacity-20"
        style={{ color: "#5eead4" }}
      >
        <Database size={50} />
      </motion.div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#5eead4] via-[#facc15] to-[#5eead4] bg-clip-text text-transparent">
              Manik Chaudhary
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-2" style={{ color: "#f5f5f4" }}>
            <span style={{ color: "#5eead4" }}>Full Stack</span>
            <span className="mx-2" style={{ color: "#888888" }}>
              •
            </span>
            <span style={{ color: "#facc15" }}>Cloud Computing</span>
            <span className="mx-2" style={{ color: "#888888" }}>
              •
            </span>
            <span style={{ color: "#5eead4" }}>Data Engineering</span>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 bg-gradient-to-r from-[#5eead4] via-[#facc15] to-[#5eead4] rounded-full" style={{ width: '100%', maxWidth: '600px' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl h-8" style={{ color: "#888888" }}>
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://github.com/chaudharymanik"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(94, 234, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#5eead4] to-[#facc15] rounded-lg font-semibold hover:from-[#4ade80] hover:to-[#facc15] transition-all duration-300"
            style={{ color: "#0e0f0f" }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(250, 204, 21, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#facc15] to-[#5eead4] rounded-lg font-semibold hover:from-[#facc15] hover:to-[#4ade80] transition-all duration-300 text-[#0e0f0f]"
            style={{}}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown size={32} style={{ color: "#888888" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
