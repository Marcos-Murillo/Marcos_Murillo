"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCard3DProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export function ProjectCard3D({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        whileHover={{
          rotateY: 5,
          rotateX: 5,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              height={400}
              width={400}
              className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              alt={title}
            />
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
                    <ExternalLink className="w-3 h-3" />
                    Ver Demo
                  </Button>
                )}
                {githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Github className="w-3 h-3" />
                    Código
                  </Button>
                )}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
