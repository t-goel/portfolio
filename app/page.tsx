"use client"

import { useState } from "react"
import { Intro } from "@/components/intro"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection, ProjectsSection, CertificationsSection, ContactSection } from "@/components/sections"
import { motion } from "framer-motion"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <Intro onComplete={() => setIntroComplete(true)} />

      {introComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <main>
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
          </main>
        </motion.div>
      )}
    </>
  )
}
