"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

interface ProjectCard3DNewProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export function ProjectCard3DNew({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCard3DNewProps) {
  const handleImageClick = () => {
    if (liveUrl && liveUrl !== "#") {
      window.open(liveUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (liveUrl && liveUrl !== "#") {
      window.open(liveUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (githubUrl && githubUrl !== "#") {
      window.open(githubUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <CardContainer className="inter-var w-full max-w-[360px]">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <div
              onClick={handleImageClick}
              className={`${liveUrl && liveUrl !== "#" ? "cursor-pointer" : ""} transition-transform hover:scale-105`}
            >
              <Image
                src={image || "/placeholder.svg"}
                height={400}
                width={400}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={title}
              />
            </div>
          </CardItem>

          {/* Technologies */}
          <CardItem translateZ="50" className="w-full mt-4">
            <div className="flex flex-wrap gap-2">
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
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            {liveUrl && liveUrl !== "#" && (
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer"
                onClick={handleDemoClick}
              >
                <ExternalLink className="w-3 h-3" />
                Ver Demo →
              </CardItem>
            )}
            {githubUrl && githubUrl !== "#" && (
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer"
                onClick={handleGithubClick}
              >
                <Github className="w-3 h-3" />
                Código
              </CardItem>
            )}
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}
