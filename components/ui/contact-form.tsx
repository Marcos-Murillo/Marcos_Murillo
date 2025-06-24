"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Crear el enlace mailto
    const mailtoLink = `mailto:marcos.murillo@correounivalle.edu.co?subject=${encodeURIComponent(
      formData.subject || "Contacto desde CV Digital",
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`,
    )}`

    // Abrir el cliente de correo
    window.location.href = mailtoLink

    // Resetear el formulario después de un breve delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="border-0 shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-900 dark:text-white">Contáctame</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/70 dark:bg-gray-800/70"
              />
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/70 dark:bg-gray-800/70"
              />
            </div>
            <Input
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-white/70 dark:bg-gray-800/70"
            />
            <Textarea
              name="message"
              placeholder="Mensaje"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white/70 dark:bg-gray-800/70"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
