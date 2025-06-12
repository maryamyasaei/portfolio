"use client"

import { FaMicrophone, FaHandshake } from "react-icons/fa"

export default function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      className="bg-white text-darkText py-20 px-6 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-12">
        <h2 className="text-3xl font-bold font-heading text-primary">
          Community &amp; Talks
        </h2>

        <div className="flex flex-col gap-8 text-left">
          {/* Meetup Talk */}
          <div className="flex items-start gap-4">
            <FaMicrophone className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold ">
                DDDByNight – React 19 Features (2024)
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Shared insights on New Features of React 19 and how it makes
                life easier for Front end developers.
              </p>
            </div>

          </div>
           <div className="flex items-start gap-4">
            <FaMicrophone className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold ">
                The UX of AI: Designing Interfaces Around Uncertainty and Confidence. (2025)
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Shared how design and engineering can come together to create more thoughtful AI experiences.
              </p>
            </div>

          </div>

          {/* Volunteering */}
          <div className="flex items-start gap-4">
            <FaHandshake className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                Volunteer – NDC Melbourne &amp; DDD Melbourne &amp; ADA
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Helped organize sessions, supported speakers, and assisted
                attendees at three of Australia&apos;s leading developer
                conferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
