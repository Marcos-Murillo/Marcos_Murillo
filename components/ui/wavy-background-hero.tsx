"use client"
import { WavyBackground } from "./wavy-background"
import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "./sparkles"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function WavyBackgroundHero() {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      waveWidth={30}
      waveOpacity={0.4}
      speed="slow"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 inter-var">
              Marcos Amilkar Murillo Agamez
            </h1>
          </Sparkles>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-6 font-normal inter-var"
          >
            Estudiante de Ingeniería Civil — Universidad del Valle
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed font-normal inter-var"
          >
            Estudiante de octavo semestre enfocado en la optimización de proyectos a través del diseño web y la
            programación. Apasionado por combinar la ingeniería con la tecnología para crear soluciones eficientes en el
            sector de la construcción.
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
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Mail className="w-4 h-4" />
              marcos.murillo@correounivalle.edu.co
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Phone className="w-4 h-4" />
              +57 324 615 3685
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
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
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar CV
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </WavyBackground>
  )
}
