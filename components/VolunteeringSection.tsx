"use client"

import { FaMicrophone, FaHandshake } from "react-icons/fa"

export default function VolunteeringSection() {
  return (
    <section id="volunteering" className="bg-white text-darkText py-20 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-12">
        <h2 className="text-3xl font-bold font-heading text-primary">
          Community & Talks
        </h2>

        <div className="flex flex-col gap-8 text-left">
          {/* Meetup Talk */}
          <div className="flex items-start gap-4">
            <FaMicrophone className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                DDDByNight – "React 19 Features" (2024)
              </h3>
              <p className="text-sm text-gray-600">
                Shared insights on designing user-friendly AI interfaces with
                confidence and uncertainty in mind.
              </p>
            </div>
          </div>

          {/* Volunteering */}
          <div className="flex items-start gap-4">
            <FaHandshake className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                Volunteer – NDC Melbourne & DDD Melbourne & ADA{" "}
              </h3>
              <p className="text-sm text-gray-600">
                Helped organize sessions, supported speakers, and assisted
                attendees at Three of Australia's leading developer conferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
