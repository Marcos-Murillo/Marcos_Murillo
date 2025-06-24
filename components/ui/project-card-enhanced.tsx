"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import type React from "react"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardEnhancedProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export function ProjectCardEnhanced({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardEnhancedProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group perspective-1000 relative"
    >
      {/* Background boxes effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-500/20 dark:border-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            whileHover={{
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.8)",
              scale: 1.5,
            }}
          />
        ))}
      </div>

      <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transform-gpu relative z-10">
        <div className="relative overflow-hidden">
          <motion.div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6">
          <motion.div
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              {liveUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              )}
              {githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
              )}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
