
"use client";
import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiRedux, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { label: "React", icon: <FaReact /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "HTML", icon: <FaHtml5 /> },
  { label: "CSS", icon: <FaCss3Alt /> },
  { label: "Redux", icon: <SiRedux /> },
  { label: "React Router", icon: <SiReactrouter /> },
  { label: "Node.js", icon: <FaNodeJs /> },
];

const firstRow = skills.slice(0, 5);
const secondRow = skills.slice(5);

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary font-heading">Skills</h2>
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[firstRow, secondRow].map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
              {row.map((skill, i) => {
                const globalIndex = rowIndex * 5 + i;
                const isActive = activeIndex === globalIndex;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setActiveIndex(isActive ? null : globalIndex)}
                    className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-white border-2 border-primary text-primary shadow-md hover:shadow-xl transition cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {isActive ? (
                      <span className="text-sm font-medium text-primary px-2">{skill.label}</span>
                    ) : (
                      <span className="text-2xl">{skill.icon}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
