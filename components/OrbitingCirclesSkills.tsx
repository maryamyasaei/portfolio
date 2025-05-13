// components/OrbitingCirclesSkills.tsx
"use client"

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaTools } from "react-icons/fa"
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiReactrouter,
  SiAmazon,
} from "react-icons/si"

import { OrbitingCircles } from "@/components/OrbitingCircles"

export default function OrbitingCirclesSkills() {
  return (
    <section
      id="skills"
      className="bg-white text-darkText py-24 px-6 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-12">
        <div className="relative flex h-[500px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-xl    border border-gray-200 bg-gradient-to-b from-white to-gray-50 shadow-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <h2 className="text-10xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-400 to-sky-300 drop-shadow-md">
              Skills
            </h2>
          </div>
          <OrbitingCircles iconSize={40}>
            <FaReact className="w-12 h-12 text-[#61DAFB]" aria-label="React" />
            <FaNodeJs
              className="w-12 h-12 text-[#8CC84B]"
              aria-label="Node.js"
            />
            <FaHtml5 className="w-12 h-12 text-[#E34F26]" aria-label="HTML5" />
            <FaCss3Alt className="w-12 h-12 text-[#1572B6]" aria-label="CSS" />
            <SiTypescript
              className="w-12 h-12 text-[#3178C6]"
              aria-label="TypeScript"
            />
            <SiJavascript
              className="w-12 h-12 text-[#F7DF1E]"
              aria-label="JavaScript"
            />
            <SiAmazon className="w-12 h-12 text-[#FF9900]" aria-label="AWS" />
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
            <SiTailwindcss
              className="w-12 h-12 text-[#06B6D4]"
              aria-label="Tailwind"
            />
            <SiNextdotjs
              className="w-12 h-12 text-[#000000]"
              aria-label="Next.js"
            />

            <SiRedux className="w-12 h-12 text-[#764ABC]" aria-label="Redux" />
            <SiReactrouter
              className="w-12 h-12 text-[#CA4245]"
              aria-label="ReactRouter"
            />
            <FaTools
              className="w-12 h-12 text-gray-700 dark:text-white"
              aria-label="DevOps"
            />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  )
}
