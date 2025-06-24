"use client"

import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certificates = [
  {
    title: "Diplomado en Gerencia de Proyectos",
    institution: "Institución Educativa",
    year: "2023",
    description: "Certificación en metodologías de gestión y dirección de proyectos aplicados a la ingeniería civil.",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Diplomado en Finanzas",
    institution: "Institución Educativa",
    year: "2023",
    description: "Formación especializada en análisis financiero y evaluación económica de proyectos de construcción.",
    logo: "/placeholder.svg?height=60&width=60",
  },
]

export function CertificatesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificados y Reconocimientos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Formación complementaria y certificaciones que respaldan mi desarrollo profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900 dark:text-white mb-2">{cert.title}</CardTitle>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{cert.institution}</p>
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <Calendar className="w-3 h-3" />
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
