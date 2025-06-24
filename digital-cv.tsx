"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Download, Calendar, Building, Code, Users } from "lucide-react"
import Image from "next/image"
import { ThemeProvider } from "next-themes"
import { Sparkles } from "./components/ui/sparkles"
import { TracingBeamContinuous } from "./components/ui/tracing-beam-continuous"
import { ThemeToggle } from "./components/ui/theme-toggle"
import { SkillBar } from "./components/ui/skill-bar"
import { ContactForm } from "./components/ui/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CertificatesSection } from "./components/ui/certificates-section"
import { ProjectCard3DNew } from "./components/ui/project-card-3d-new"
import { MainMenusGradientCard } from "./components/ui/animated-card"
import { Vortex } from "./components/ui/vortex"


const experiences = [
  {
    title: "Optimización de procesos en laboratorios de suelos",
    company: "Universidad del Valle — Programa de Ingeniería Civil",
    period: "2022 - Presente",
    description:
      "Desarrollo de herramientas digitales que automatizan y agilizan el proceso de cálculo en laboratorios de suelos, permitiendo obtener resultados de manera más rápida y eficiente.",
    achievements: [
      "Automatización de cálculos de laboratorio de suelos",
      "Reducción significativa en tiempos de procesamiento",
      "Implementación de herramientas digitales especializadas",
      "Colaboración directa con laboratorios universitarios",
    ],
  },
]

const education = [
  {
    degree: "Ingeniería Civil",
    institution: "Universidad del Valle",
    period: "2019 - Actualidad",
    description:
      "Octavo semestre con enfoque en optimización de proyectos mediante tecnología y programación aplicada al sector construcción.",
    icon: "🎓",
  },
  {
    degree: "Diplomado en Gerencia de Proyectos",
    institution: "Institución Educativa",
    period: "2023",
    description: "Formación especializada en metodologías de gestión y dirección de proyectos de ingeniería civil.",
    icon: "📊",
  },
  {
    degree: "Diplomado en Finanzas",
    institution: "Institución Educativa",
    period: "2023",
    description: "Conocimientos en análisis financiero y evaluación económica de proyectos de construcción.",
    icon: "💰",
  },
]

const projects = [
  {
    title: "Sistema de Automatización - Laboratorio de Suelos",
    description:
      "Herramienta digital desarrollada para automatizar los cálculos de ensayos de laboratorio de suelos, optimizando los procesos y reduciendo errores manuales.",
    image: "/suelos.jpg",
    technologies: ["JavaScript", "Excel VBA", "Python", "Data Analysis"],
    liveUrl: "https://lab-suelos.vercel.app/",
    githubUrl: "https://github.com/Marcos-Murillo/lab_suelos",
  },
  {
    title: "Dashboard de Gestión de Proyectos",
    description:
      "Aplicación web para el seguimiento y control de proyectos de construcción, integrando principios de gerencia de proyectos con tecnología moderna.",
    image: "/gestion.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Calculadora de Análisis Financiero",
    description:
      "Herramienta web para evaluación económica de proyectos de construcción, aplicando conceptos de ingeniería económica y finanzas.",
    image: "/finanzas.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Financial Modeling"],
    liveUrl: "https://finanzas-personales-marcos-projects-9b3f5b99.vercel.app/",
    githubUrl: "https://github.com/Marcos-Murillo/finanzas_personales",
  },
]

const technicalSkills = [
  { skill: "Optimización de Procesos", level: 90 },
  { skill: "Diseño Web", level: 85 },
  { skill: "JavaScript", level: 80 },
  { skill: "Python", level: 75 },
  { skill: "Análisis de Datos", level: 85 },
  { skill: "Excel Avanzado", level: 90 },
]

const softSkills = [
  { skill: "Gestión de Proyectos", level: 90 },
  { skill: "Resolución de Problemas", level: 95 },
  { skill: "Trabajo en Equipo", level: 90 },
  { skill: "Comunicación Efectiva", level: 85 },
]

export default function DigitalCV() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TracingBeamContinuous>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <ThemeToggle />

          {/* Header Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <Vortex
              backgroundColor="transparent"
              rangeY={800}
              particleCount={500}
              baseHue={200}
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 max-w-4xl mx-auto"
              >
                <div className="mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Marcos Amilkar Murillo Agamez"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <Sparkles className="inline-block">
                    <h1
                      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Marcos Amilkar Murillo Agamez
                    </h1>
                  </Sparkles>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                  >
                    Estudiante de Ingeniería Civil — Universidad del Valle
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
                  >
                    Estudiante de octavo semestre enfocado en la optimización de proyectos a través del diseño web y la
                    programación. Apasionado por combinar la ingeniería con la tecnología para crear soluciones
                    eficientes en el sector de la construcción.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-4 mb-8"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20"
                    >
                      <Mail className="w-4 h-4" />
                      marcos.murillo@correounivalle.edu.co
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20"
                    >
                      <Phone className="w-4 h-4" />
                      +57 324 615 3685
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20"
                    >
                      <MapPin className="w-4 h-4" />
                      Cali, Colombia
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex justify-center gap-4"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar CV
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/20"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </Vortex>
          </section>

          {/* Experience Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experiencia Profesional</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Mi trayectoria en el desarrollo de herramientas digitales para optimización de procesos.
                </p>
              </motion.div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                              <Building className="w-4 h-4" />
                              {exp.company}
                            </div>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Logros principales:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Educación</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Mi formación académica y certificaciones profesionales.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MainMenusGradientCard
                      title={edu.degree}
                      description={`${edu.institution} • ${edu.period}`}
                      className="h-32"
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-2">{edu.icon}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 px-4">{edu.description}</p>
                      </div>
                    </MainMenusGradientCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos Destacados</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Una selección de mis trabajos más recientes y significativos.
                </p>
              </motion.div>

              <div className="flex  gap-6 justify-items-center">
                {projects.map((project, index) => (
                  <div key={index} className="w-full max-w-sm">
                    <ProjectCard3DNew {...project} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Habilidades</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Mis competencias técnicas y habilidades blandas desarrolladas a lo largo de mi carrera.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Habilidades Técnicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {technicalSkills.map((skill, index) => (
                        <SkillBar key={skill.skill} {...skill} index={index} />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Habilidades Blandas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {softSkills.map((skill, index) => (
                        <SkillBar key={skill.skill} {...skill} index={index} />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <CertificatesSection />

          {/* Contact Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Trabajamos Juntos?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!
                </p>
              </motion.div>

              <ContactForm />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © 2024 Marcos Amilkar Murillo Agamez. Todos los derechos reservados.
              </p>
            </div>
          </footer>
        </div>
      </TracingBeamContinuous>
    </ThemeProvider>
  )
}
