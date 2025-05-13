"use client"

import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or Title */}
        <h1 className="text-xl font-bold text-gray-800">MyPortfolio</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
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
            <a href="#volunteering" className="hover:text-blue-500">
              Volunteering
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
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
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-800">
            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#volunteering"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Volunteering
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
