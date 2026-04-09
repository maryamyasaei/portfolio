import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SmartBook — Website UX & AI Automation for Local Businesses",
  description:
    "I help local businesses improve bookings, reduce drop-offs, and automate customer interactions with modern websites and simple AI tools.",
}

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
