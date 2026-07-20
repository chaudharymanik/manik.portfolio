"use client"

import { useEffect, useRef, useState } from "react"

export default function CountUpStat({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number
  suffix: string
  label: string
  decimals?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
            const duration = 2000
            const startTime = performance.now()

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              setDisplay(progress * value)
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setDisplay(value)
              }
            }
            requestAnimationFrame(animate)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="text-center">
      <div ref={ref} className="font-metric-xl text-metric-xl text-primary">
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="font-label-caps text-label-caps text-on-surface-variant">{label}</div>
    </div>
  )
}
