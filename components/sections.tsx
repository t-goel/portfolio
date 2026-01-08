"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { CertificationCard } from "./certification-card"
import { Github, Linkedin, Mail } from "lucide-react"

const projects = [
  {
    title: "AI Chat Assistant",
    description:
      "A conversational AI assistant built with advanced language models, featuring real-time responses and context-aware interactions.",
    techStack: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Fullstack E-Commerce Platform",
    description: "Complete e-commerce solution with payment processing, inventory management, and admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Live document editing and collaboration platform with WebSocket-based real-time sync.",
    techStack: ["Next.js", "Socket.io", "Redis", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "ML Image Classifier",
    description: "Image classification API using machine learning models with high accuracy and fast inference.",
    techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
    codeUrl: "#",
  },
]

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialUrl: "#",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "#",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #bf00ff 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          <div className="mt-8 p-8 glassmorphism rounded-2xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate Software Developer with a deep interest in artificial intelligence and its applications
              in modern web development. My journey in tech has been driven by curiosity and a constant desire to learn
              and grow.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              I specialize in building fullstack applications that leverage the power of AI to create intelligent,
              responsive, and user-centric experiences. From natural language processing to computer vision, I enjoy
              exploring how AI can transform the way we interact with technology.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and
              sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 grid-bg">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #bf00ff 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span
            style={{
              background: "linear-gradient(135deg, #bf00ff 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Certifications
          </span>
        </motion.h2>
        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} {...cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 grid-bg">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #bf00ff 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-[#bf00ff] hover:glow-purple transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={28} className="text-muted-foreground group-hover:text-[#bf00ff] transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-[#bf00ff] hover:glow-purple transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="text-muted-foreground group-hover:text-[#bf00ff] transition-colors" />
            </a>
            <a
              href="mailto:hello@tanmaygoel.dev"
              className="p-4 rounded-full bg-card border border-border hover:border-[#bf00ff] hover:glow-purple transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={28} className="text-muted-foreground group-hover:text-[#bf00ff] transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-muted-foreground/60 text-sm font-mono">
        <p>© {new Date().getFullYear()} Tanmay Goel. Built with Next.js & Framer Motion.</p>
      </div>
    </section>
  )
}
