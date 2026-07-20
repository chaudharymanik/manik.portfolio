"use client"

import { useEffect, useRef } from "react"

type Track = {
  label: string
  color: string
}

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  label: string | null
  pulse: number
}

const COLORS = {
  background: "#12151A",
  default: "#8A93A3",
  fullstack: "#4FD8E8",
  cloud: "#F5A623",
  ai: "#B18CF5",
}

const TRACKS: Track[] = [
  { label: "RAG", color: COLORS.ai },
  { label: "LLM", color: COLORS.ai },
  { label: "AWS", color: COLORS.cloud },
  { label: "Terraform", color: COLORS.cloud },
  { label: "React", color: COLORS.fullstack },
  { label: "Next.js", color: COLORS.fullstack },
  { label: "LangGraph", color: COLORS.ai },
  { label: "FastAPI", color: COLORS.fullstack },
  { label: "Docker", color: COLORS.cloud },
  { label: "Redis", color: COLORS.cloud },
  { label: "VectorDB", color: COLORS.ai },
  { label: "Lambda", color: COLORS.cloud },
]

export default function NodeGraphBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    container.appendChild(canvas)

    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight
    let nodes: Node[] = []
    let animationFrame: number

    const init = () => {
      width = container.clientWidth || window.innerWidth
      height = container.clientHeight || window.innerHeight
      canvas.width = width
      canvas.height = height

      const nodeCount = window.innerWidth < 768 ? 25 : 55
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        const track = Math.random() > 0.6 ? TRACKS[Math.floor(Math.random() * TRACKS.length)] : null
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: track ? 2.5 : 1.5,
          color: track ? track.color : COLORS.default,
          label: track ? track.label : null,
          pulse: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = () => {
      ctx.fillStyle = COLORS.background
      ctx.fillRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(138, 147, 163, ${0.15 * (1 - dist / 140)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.015

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        const pulseVal = Math.sin(node.pulse) * 0.4 + 0.6

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius + (node.label ? pulseVal : 0), 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.globalAlpha = node.label ? 0.8 : 0.3
        ctx.fill()
        ctx.globalAlpha = 1.0

        if (node.label) {
          ctx.font = '10px "JetBrains Mono", monospace'
          ctx.fillStyle = "#E8EAED"
          ctx.fillText(node.label, node.x + 8, node.y + 4)
        }
      })

      animationFrame = requestAnimationFrame(draw)
    }

    const handleResize = () => init()

    init()
    draw()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
      container.removeChild(canvas)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 opacity-40" />
}
