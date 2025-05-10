"use client"
import { motion } from "framer-motion"
import StarContact from "@/components/StarContact"
import Hero from "@/components/Hero"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSections from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SkillsSection />
      </motion.section>
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ProjectsSections />
      </motion.section>
      <section className="bg-white text-darkText py-24 px-6">
        <div className="max-w-4xl mx-auto text-center font-heading text-3xl md:text-4xl font-extrabold leading-snug">
          <p>
            “Great front-end is invisible. If it feels easy, fast, and beautiful
            — I’ve done my job.”
          </p>
        </div>
      </section>
      <motion.section
        id="contact"
        className="scroll-mt-20 py-24 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <section className="bg-accent text-darkText py-24 px-6">
          <StarContact />
        </section>
      </motion.section>
    </main>
  )
}
