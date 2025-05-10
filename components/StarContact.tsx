// components/StarIntro.tsx
"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function StarIntro() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4 bg-gray-100">
      <div className="w-72 md:w-96">
        <img src="/hero.jpg" alt="Maryam" className="rounded-xl shadow-lg" />
        <p className="text-center italic mt-2 text-sm text-gray-600">
          Maryam, Front-End Developer
        </p>
      </div>

      <div className="hidden md:block relative w-[560px] h-[580px]">
        <motion.div
          className="absolute inset-0 bg-primary star-shape z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ scale: [1, 1.015, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 1,
          }}
          viewport={{ once: true }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6 py-4">
          <h2 className="text-xl font-extrabold mb-2 font-heading">
            Clean code meets clean UI
          </h2>
          <p className="text-base leading-relaxed mb-4 font-body max-w-[270px]">
            I build fast, accessible, and modern interfaces using React,
            TypeScript, and creativity, lets collaborate!🥳
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/maryamyasaei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-xl hover:text-gray-200 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/maryam-yasaei?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjWV7NlX4TCqV9EXrXHwYJA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-xl hover:text-gray-200 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
