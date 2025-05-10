import "../styles/globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Maryam Yasaei – Front-End Developer",
  description:
    "Portfolio website showcasing React, Next.js, and UI development work.",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-darkText">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
