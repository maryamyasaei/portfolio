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
    title: "ToDo App",
    description:
      "Simple TODO app with features like Adding New TODOs, Editing and Deleting TODOs,Marking TODOs as Completed and Tracking Completed TODOs.",
    image: "./ToDo.png",
    link: "https://todo-app-black-mu.vercel.app/",
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
]

export default function ProjectsSection() {
  return (
    <section id="projects" className=" bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary font-heading">
          Projects Showcase
        </h2>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
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
            <motion.div
              className="text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.25, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-base text-darkText">{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
