"use client"
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage("")

    try {
      const response = await fetch("https://formspree.io/f/mjkwldwn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      })

      if (response.ok) {
        setStatusMessage("✅ Thanks for your message!")
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
      } else {
        setStatusMessage("❌ Oops! Something went wrong.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setStatusMessage("❌ Failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-gray-100 py-16 px-6 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {["First Name", "Last Name", "Email"].map((field) => (
            <div key={field}>
              <label className="block mb-1 font-semibold">
                {" "}
                {field.charAt(0).toUpperCase() + field.slice(1)} * *
              </label>
              <input
                name={field}
                type={field === "email" ? "email" : "text"}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                required
                className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>
          ))}
          <div>
            <label className="block mb-1 font-semibold">
              Type your message here... *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full border p-2 rounded h-32 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded hover:bg-primary/80 transition"
          >
            Submit
          </button>
          <input
            type="hidden"
            name="_subject"
            value="New submission from portfolio site"
          />
          {isSubmitting && (
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="animate-spin mr-2 h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Sending...
            </div>
          )}
          {statusMessage && (
            <p
              className={`text-sm mt-2 ${
                statusMessage.startsWith("✅")
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
        {/* Info + Message */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            Maryam Yasaei
          </h3>
          <p className="text-sm text-gray-700 mb-6 dark:text-white">
            Software Development | AI Engineering | Cloud Architecture
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
            <a
              href="https://medium.com/@myasaie.65"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium />
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
