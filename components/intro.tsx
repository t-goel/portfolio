"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 3500),
      setTimeout(() => onComplete(), 4500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-glow"
            style={{
              background: "linear-gradient(135deg, #bf00ff 0%, #ec4899 50%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: stage >= 1 ? 1 : 0,
              y: stage >= 3 ? -50 : stage >= 1 ? 0 : 20,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tanmay Goel
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-muted-foreground font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: stage >= 2 ? 1 : 0,
              y: stage >= 3 ? -50 : stage >= 2 ? 0 : 20,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Software Developer | AI Integrations
          </motion.p>

          {/* Animated line */}
          <motion.div
            className="mt-8 h-0.5 bg-gradient-to-r from-transparent via-[#bf00ff] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: stage >= 2 ? 200 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
