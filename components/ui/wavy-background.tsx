"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const noise = useNoise()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    )
  }, [])

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001
      case "fast":
        return 0.002
      default:
        return 0.001
    }
  }

  const init = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const w = (ctx.canvas.width = window.innerWidth)
    const h = (ctx.canvas.height = window.innerHeight)
    ctx.filter = `blur(${blur}px)`
    let animationId: number

    const render = () => {
      ctx.fillStyle = backgroundFill || "black"
      ctx.globalAlpha = 1
      ctx.fillRect(0, 0, w, h)
      drawWave(5)
      drawWave(3)
      drawWave(9)
      animationId = requestAnimationFrame(render)
    }

    const drawWave = (n: number) => {
      for (let i = 0; i < n; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth || 50
        ctx.strokeStyle = colors?.[i % colors.length] || `hsl(${Math.floor(i * 60)}, 70%, 50%)`
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i) * 100 + h * 0.5
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }

  useEffect(() => {
    const cleanup = init()
    return cleanup
  }, [])

  const [animationId, setAnimationId] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      init()
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn("h-screen flex flex-col items-center justify-center relative overflow-hidden", containerClassName)}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

const useNoise = () => {
  const noise = (x: number, y: number) => {
    let value = 0
    let amplitude = 1
    let frequency = 0.005
    let maxValue = 0

    for (let i = 0; i < 5; i++) {
      value += Math.sin(x * frequency + Date.now() * 0.0005) * amplitude
      maxValue += amplitude
      amplitude *= 0.5
      frequency *= 2
    }

    return value / maxValue
  }

  return noise
}
