"use client"
import { motion } from "framer-motion"

const projects = [
  {
    title: "CountDown Timer App",
    description:
      "A countdown timer to measure the time until an event happens.",
    image: "./CountDown.png",
    link: "https://countdown-timer-app-tan.vercel.app/",
  },
  {
    title: "Note App",
    description: "A Simple Notes App Created with React, TypeScript.",
    image: "./NoteApp.png",
    link: "https://notes-app-two-vert.vercel.app/",
  },
  {
    title: "Crypto Signals",
    description:
      "CryptoSignal is a web application that allows users to view a comprehensive list of cryptocurrencies along with relevant data.",
    image: "./CryptoSignal.png",
    link: "https://nimo-crypto-signals.vercel.app/",
  },
  {
    title: "Data Discovery Portal",
    description:
      "Data Discovery Portal for TERN to search about ecosystems in Australia.",
    image: "./DataDiscovery.png",
    link: "https://portal.tern.org.au/browse/theme",
  },
  {
    title: "Wheel Of Names",
    description:
      "This will be an app that I presume is inspired by the TV show Wheel of Fortune. In the TV show, contestants try to figure out a short phrase by guessing letters.",
    image: "./WheelOfNames.png",
    link: "https://wheel-of-names-app.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Weather App with current day and 7 Days Forecast Sections.Also, Searching and current location Logic.",
    image: "./WeatherApp.png",
    link: "https://weather-app-psi-eight-32.vercel.app/",
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 bg-gray-50 py-20 px-6 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary font-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects Showcase
        </motion.h2>

        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[320px] rounded-xl shadow-lg"
              />
            </motion.a>

            <div className="text-left">
              <h3 className="text-xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-base text-darkText dark:text-white">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
