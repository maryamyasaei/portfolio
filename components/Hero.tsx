"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

export default function HeroSection() {
  return (
    <section className="w-full bg-accent text-darkText px-6 pt-28 pb-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side – Image + Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/hero.jpg"
              alt="Maryam Yasaei"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-lg md:text-xl font-body mt-6 text-center text-primary font-semibold">
            <Typewriter
              words={[
                "Front-End Developer 👩‍💻",
                "React Queen 👑",
                "UI Lover 💖",
                "Cloud Architecture Enthusiast ☁️",
                "AWS AI Practitioner 🤖",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </motion.div>
        
        {/* Right Side – Greeting and Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-5xl font-extrabold mb-4 font-heading flex items-center justify-center md:justify-start gap-3 text-primary">
            Hi, I am Maryam{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
          </h1>
          <p className="text-base leading-relaxed text-darkText/90 font-body dark:text-white ">
            I’m a React-loving Frontend Developer with over 5 years of
            experience turning ideas into meaningful digital experiences.
            Recently, I’ve been diving into AI and Cloud Architecture with AWS,
            combining creativity and technology to build smarter, scalable
            applications.{" "}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
