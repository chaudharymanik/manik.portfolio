"use client"

import { motion } from "framer-motion"
import { Cloud, Server, Database, Cpu } from "lucide-react"

export default function FloatingClouds() {
  const cloudElements = [
    { Icon: Cloud, delay: 0, duration: 20, size: 60, color: "text-[#5eead4]/10" },
    { Icon: Server, delay: 5, duration: 25, size: 40, color: "text-[#facc15]/10" },
    { Icon: Database, delay: 10, duration: 30, size: 50, color: "text-[#5eead4]/10" },
    { Icon: Cpu, delay: 15, duration: 22, size: 35, color: "text-[#facc15]/10" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {cloudElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color}`}
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          <element.Icon size={element.size} />
        </motion.div>
      ))}
    </div>
  )
}
