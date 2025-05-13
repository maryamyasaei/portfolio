// components/Navbar.tsx
"use client"

import { useState } from "react"
import ThemeToggle from "@/components/ThemeToggle"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo or Title */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          MyPortfolio
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <li>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#volunteering" className="hover:text-blue-500 ">
              Volunteering
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div className="hidden md:block ml-4">
          <ThemeToggle />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 text-gray-800 dark:text-white">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#volunteering" onClick={() => setMenuOpen(false)}>
                Volunteering
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
