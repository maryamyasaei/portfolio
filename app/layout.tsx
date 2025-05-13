"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import { ParallaxProvider } from "react-scroll-parallax"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-darkText">
        <Navbar />
        <ParallaxProvider>{children}</ParallaxProvider>
      </body>
    </html>
  )
}
