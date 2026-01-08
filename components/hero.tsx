"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[#bf00ff]/20 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-[#ec4899]/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Building the future with{" "}
            <span
              className="text-glow"
              style={{
                background: "linear-gradient(135deg, #bf00ff 0%, #ec4899 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI & Fullstack Architecture
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          I am a Software Developer interested in integrating AI into fullstack applications and continuous learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#bf00ff] rounded-lg glow-purple hover:bg-[#a600db] transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground border border-[#bf00ff]/50 rounded-lg hover:bg-[#bf00ff]/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-[#bf00ff] transition-colors">
            <ArrowDown className="animate-bounce" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
