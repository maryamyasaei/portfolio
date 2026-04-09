"use client"
import Navbar from "@/components/Navbar"
import { ParallaxProvider } from "react-scroll-parallax"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white text-darkText">
      <Navbar />
      <ParallaxProvider>{children}</ParallaxProvider>
    </div>
  )
}
