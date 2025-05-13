"use client"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-16 px-6 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form className="space-y-6">
          {["First Name", "Last Name", "Email"].map((label, i) => (
            <div key={i}>
              <label className="block mb-1 font-semibold">{label} *</label>
              <input
                type={label === "Email" ? "email" : "text"}
                className="w-full border border-gray-300 p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 font-semibold">
              Type your message here... *
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded h-32 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded hover:bg-primary/80 transition"
          >
            Submit
          </button>
        </form>

        {/* Info + Message */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            Maryam Yasaei
          </h3>
          <p className="text-sm text-gray-700 mb-6 dark:text-white">
            Front-End Developer
          </p>

          <div className="text-gray-800 mb-8 dark:text-white">
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:myasaei65@gmail.com"
                className="text-blue-500 hover:underline"
              >
                myasaei65@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-4 text-xl text-primary mt-6 mb-6">
            <a
              href="https://linkedin.com/in/maryam-yasaei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/maryamyasaei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          <p className="text-md italic text-gray-600 leading-relaxed border-l-4 pl-4 border-primary dark:text-white">
            I build fast, accessible, and modern interfaces using React,
            TypeScript, and creativity. Let&apos;s collaborate! 🥳
          </p>
        </div>
      </div>
    </section>
  )
}
