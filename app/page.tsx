"use client"
import { motion } from "framer-motion"
import ContactSection from "@/components/ContactSection"
import Hero from "@/components/Hero"
import VolunteeringSection from "@/components/VolunteeringSection"
import ProjectsSections from "@/components/ProjectsSection"
import OrbitingCirclesSkills from "@/components/OrbitingCirclesSkills"

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
        <OrbitingCirclesSkills />
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
      <motion.section
        id="volunteering"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <VolunteeringSection />
      </motion.section>

      <motion.section
        id="contact"
        className="scroll-mt-20 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <section className="bg-accent text-darkText  py-20 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center font-heading text-3xl md:text-4xl font-extrabold leading-snug dark:text-white">
            <p>
              “Great front-end is invisible. If it feels easy, fast, and
              beautiful — I’ve done my job.”
            </p>
          </div>
          <ContactSection />
        </section>
      </motion.section>
    </main>
  )
}
