"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection, ProjectsSection, CertificationsSection, ContactSection } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}
