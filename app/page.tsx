"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import FloatingClouds from "@/components/floating-clouds"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#0e0f0f", color: "#f5f5f4" }}>
      <ParticleBackground />
      <FloatingClouds />
      <Navigation />

      <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5eead4]/10 via-[#facc15]/5 to-[#1c1f1f]/20" />
      </motion.div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
