"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function Sparkles({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 2,
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        >
          <div
            className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              width: sparkle.size,
              height: sparkle.size,
            }}
          />
        </motion.div>
      ))}
      {children}
    </div>
  )
}
