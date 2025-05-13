// components/ThemeToggle.tsx
"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 px-4 rounded border border-gray-400 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-white hover:shadow-md transition"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  )
}
