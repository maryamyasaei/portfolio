"use client"
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import "./business.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function BusinessPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.15 }
    )
    const elements = document.querySelectorAll(".smartbook-page .reveal")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`smartbook-page ${inter.className}`}>
      {/* ── Nav ── */}
      <nav className={navScrolled ? "scrolled" : ""}>
        <div className="container">
          <a href="#" className="logo">
            <svg viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#6366f1" />
              <path
                d="M8 10h12M8 14h8M8 18h10"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            SmartBook
          </a>
          <div className={`nav-links${menuOpen ? " show" : ""}`}>
            <a href="#services">Services</a>
            <a href="#examples">Example Work</a>
            <a href="#how">Process</a>
            <a href="#why-me">Why Me</a>
            <div className="nav-cta">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <h1>
            Turn More Visitors Into Bookings With{" "}
            <span className="gradient">Better UX &amp; AI Automation</span>
          </h1>
          <p>
            I help local businesses improve bookings, reduce drop-offs, and
            automate customer interactions with modern websites and simple AI
            tools.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: ".9rem",
              marginTop: "-20px",
              marginBottom: "32px",
              letterSpacing: ".02em",
              textAlign: "center",
            }}
          >
            Based in Australia — helping local businesses improve bookings and
            customer experience
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-large">
              Get Your Free Demo
            </a>
            <a href="#examples" className="btn btn-outline btn-large">
              See Example Work
            </a>
          </div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="pain-points" id="pain-points">
        <div className="container">
          <div className="section-label">
            <span className="badge">THE PROBLEM</span>
          </div>
          <h2 className="section-title">
            Why small businesses lose potential customers online
          </h2>
          <p className="section-sub">
            Many business websites look fine, but still lose customers before
            they take action. Long booking flows, weak calls-to-action, and no
            instant support can all reduce conversions.
          </p>

          <div className="pain-grid">
            <div className="pain-card reveal">
              <div className="pain-icon">🚪</div>
              <div>
                <h3>Visitors leave before booking</h3>
              </div>
            </div>
            <div className="pain-card reveal reveal-delay-1">
              <div className="pain-icon">😤</div>
              <div>
                <h3>Booking flows feel too long or confusing</h3>
              </div>
            </div>
            <div className="pain-card reveal reveal-delay-2">
              <div className="pain-icon">💬</div>
              <div>
                <h3>Customers have questions but get no instant answers</h3>
              </div>
            </div>
            <div className="pain-card reveal reveal-delay-3">
              <div className="pain-icon">⏳</div>
              <div>
                <h3>Manual follow-up takes too much time</h3>
              </div>
            </div>
          </div>

          <p className="pain-note reveal">
            A good-looking website is not always an effective one. Small
            improvements in booking flow and customer guidance can make a big
            difference.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label">
            <span className="badge">SERVICES</span>
          </div>
          <h2 className="section-title">What I can help you improve</h2>
          <p className="section-sub">
            From quick wins to full redesigns — here are the services I offer to
            help your business convert more visitors into booked clients.
          </p>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon">📊</div>
              <h3>Booking flow optimisation</h3>
              <p>
                Streamline your booking process so fewer customers drop off
                before completing their appointment.
              </p>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon">🎯</div>
              <h3>Conversion-focused landing pages</h3>
              <p>
                Pages designed with one goal — turning visitors into booked
                clients through clear layout and strong CTAs.
              </p>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon">🤖</div>
              <h3>AI chat assistants for FAQs</h3>
              <p>
                Give visitors instant answers to common questions about pricing,
                availability, and services — 24/7.
              </p>
            </div>
            <div className="service-card reveal reveal-delay-3">
              <div className="service-icon">🔄</div>
              <h3>Lead capture &amp; follow-up automation</h3>
              <p>
                Automatically capture interested visitors and follow up so no
                potential client slips through the cracks.
              </p>
            </div>
            <div className="service-card reveal reveal-delay-4">
              <div className="service-icon">📱</div>
              <h3>Mobile-friendly redesigns</h3>
              <p>
                Make sure your site works beautifully on every device — where
                most of your customers are browsing.
              </p>
            </div>
            <div className="service-card reveal">
              <div className="service-icon">⚡</div>
              <h3>Faster, simpler customer journeys</h3>
              <p>
                Remove unnecessary steps and friction so customers can go from
                landing to booking in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Example Work ── */}
      <section className="examples" id="examples">
        <div className="container">
          <div className="section-label">
            <span className="badge">EXAMPLE WORK</span>
          </div>
          <h2 className="section-title">See what I build</h2>
          <p className="section-sub">
            Demo projects built to show how better UX and AI tools can improve
            bookings for different types of businesses.
          </p>

          <div className="example-grid">
            {/* Dental Clinic */}
            <div className="example-card reveal">
              <div className="example-visual">
                <div className="example-mockup">
                  <div className="example-mockup-icon">🦷</div>
                  <div className="example-mockup-label">Dental Clinic Demo</div>
                </div>
              </div>
              <div className="example-content">
                <div className="example-type">🏥 Dental Clinic</div>
                <h3>Dental Clinic Booking Experience</h3>
                <p>
                  A conversion-focused booking experience designed to reduce
                  drop-off and make it easier for patients to book.
                </p>
                <ul className="example-highlights">
                  <li>
                    <span className="check-icon">✓</span> Clear call-to-action
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Booking preview on
                    homepage
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Trust-focused layout
                  </li>
                  <li>
                    <span className="check-icon">✓</span> AI assistant concept
                    for common patient questions
                  </li>
                </ul>
              </div>
            </div>

            {/* Beauty Studio */}
            <div className="example-card reveal">
              <div className="example-visual">
                <div className="example-mockup">
                  <div className="example-mockup-icon">💅</div>
                  <div className="example-mockup-label">
                    Beauty Studio Demo
                  </div>
                </div>
              </div>
              <div className="example-content">
                <div className="example-type">💄 Beauty Studio</div>
                <h3>Beauty Studio Website</h3>
                <p>
                  A premium booking-focused design for beauty businesses that
                  want more appointments from mobile visitors.
                </p>
                <ul className="example-highlights">
                  <li>
                    <span className="check-icon">✓</span> Mobile-first booking
                    flow
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Service showcase with
                    pricing
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Premium visual design
                  </li>
                </ul>
              </div>
            </div>

            {/* Cafe */}
            <div className="example-card reveal">
              <div className="example-visual">
                <div className="example-mockup">
                  <div className="example-mockup-icon">☕</div>
                  <div className="example-mockup-label">
                    Cafe Landing Page Demo
                  </div>
                </div>
              </div>
              <div className="example-content">
                <div className="example-type">🍽️ Cafe</div>
                <h3>Cafe Landing Page</h3>
                <p>
                  A modern landing page focused on menu visibility, quick
                  actions, and customer engagement.
                </p>
                <ul className="example-highlights">
                  <li>
                    <span className="check-icon">✓</span> Quick-action menu
                    layout
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Cleaner UX for mobile
                    visitors
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Better customer
                    engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-it-works" id="how">
        <div className="container">
          <div className="section-label">
            <span className="badge">PROCESS</span>
          </div>
          <h2 className="section-title">How it works</h2>
          <p className="section-sub">
            A simple, no-pressure process from first look to final delivery.
          </p>

          <div className="steps">
            <div className="step reveal">
              <div className="step-number">1</div>
              <h3>Review</h3>
              <p>
                I review your current website and identify drop-off points and
                friction in the booking flow.
              </p>
            </div>
            <div className="step reveal reveal-delay-1">
              <div className="step-number">2</div>
              <h3>Demo</h3>
              <p>
                I create a quick demo or improvement concept tailored to your
                business.
              </p>
            </div>
            <div className="step reveal reveal-delay-2">
              <div className="step-number">3</div>
              <h3>Build</h3>
              <p>
                If you like the direction, I customise and build the final
                version.
              </p>
            </div>
            <div className="step reveal reveal-delay-3">
              <div className="step-number">4</div>
              <h3>Support</h3>
              <p>
                Optional ongoing support and updates to keep things running
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Me ── */}
      <section className="why-me" id="why-me">
        <div className="container">
          <div className="section-label">
            <span className="badge">WHY ME</span>
          </div>
          <h2 className="section-title">Why work with me</h2>
          <div className="why-me-content">
            <p>
              I combine front-end development, UX thinking, and AI-focused
              solutions to help small businesses improve how they attract and
              convert customers online.
            </p>
            <div className="why-me-grid">
              <div className="why-me-item reveal">
                <div className="why-me-icon">🎨</div>
                <span>Modern, clean design</span>
              </div>
              <div className="why-me-item reveal reveal-delay-1">
                <div className="why-me-icon">📱</div>
                <span>Mobile-first thinking</span>
              </div>
              <div className="why-me-item reveal reveal-delay-2">
                <div className="why-me-icon">🧠</div>
                <span>Practical AI ideas, not hype</span>
              </div>
              <div className="why-me-item reveal reveal-delay-3">
                <div className="why-me-icon">🚀</div>
                <span>Fast iteration and personalised work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-box reveal">
            <h2>Want a quick idea for your business?</h2>
            <p>
              I can create a simple demo showing how your website, booking flow,
              or customer experience could be improved — no commitment needed.
            </p>
            <div className="contact-buttons">
              <a
                href="mailto:your@email.com?subject=Free%20Demo%20Request&body=Hi%2C%20I%27d%20like%20to%20request%20a%20free%20demo%20for%20my%20business."
                className="btn btn-large btn-white"
              >
                Get Your Free Demo
              </a>
              <a
                href="mailto:your@email.com?subject=Enquiry%20from%20Website"
                className="btn btn-large btn-ghost"
              >
                Contact Me
              </a>
            </div>
            <div className="contact-email">
              <a href="mailto:your@email.com">your@email.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <svg viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#6366f1" />
                <path
                  d="M8 10h12M8 14h8M8 18h10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              SmartBook
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#examples">Example Work</a>
              <a href="#how">Process</a>
              <a href="#contact">Contact</a>
              <a href="mailto:your@email.com">your@email.com</a>
            </div>
          </div>
          <div className="footer-copy">
            &copy; 2026 SmartBook. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
