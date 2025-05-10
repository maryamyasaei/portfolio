// components/Hero.tsx
"use client"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  return (
    <section className="w-full  bg-accent text-darkText pt-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 py-20">
        {/* Intro Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
            Hi, I’m Maryam{" "}
            <motion.span
              className="inline-block origin-bottom"
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </h1>
          <p className="text-lg md:text-xl font-body mb-6">
            <Typewriter
              words={[
                "Front-End Developer",
                "CSS Enthusiast",
                "UI Lover",
                "React Queen 💅",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <a
            href="#projects"
            className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
        </div>

        {/* About Me Section */}
        <div className="flex-1 bg-white text-darkText p-6 py-15 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-primary text-center font-heading">
            A bit about me
          </h2>
          <p className="text-base leading-relaxed">
            I’m a front-end developer with a passion for creating accessible,
            scalable, and user-centered interfaces. I love working with modern
            frameworks like React and Next.js and enjoy bringing designs to life
            with clean, maintainable code. Let’s build something awesome
            together.
          </p>
        </div>
      </div>
    </section>
  )
}
