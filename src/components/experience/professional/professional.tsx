import { type ReactElement } from 'react'

import { Badge } from '@/ui/badge'

import { Experience } from '../experience'
import { getProfessionalExperience } from './get-professional-experience'

const Professional = (): ReactElement => {
  const experience = getProfessionalExperience()

  return (
    <div className="border-l-2 border-muted pl-6 mb-4">
      {experience.map((exp) => (
        <Experience key={exp.slug} title={exp.title} description={exp.date}>
          <exp.component />
        </Experience>
      ))}
      <h2>Professional Experience</h2>
      <div className="w-1/3 flex flex-col gap-y-4 mt-4">
        <Experience
          title={
            <div className="inline-flex items-center gap-2">
              <h3>MOHC</h3>
              <Badge variant="default">October 2025 - Present</Badge>
            </div>
          }
          description="Junior Fullstack Developer"
        >
          <p>
            Working part-time alongside my final year at university, developing new features and maintaining existing
            solutions for clients. Using languages and technologies such as Go, TypeScript, React, Next.js and MySQL to
            work on full-stack features.
          </p>
        </Experience>
        <Experience
          title={
            <div className="inline-flex items-center gap-2">
              <h3>Royal Holloway</h3>
              <Badge variant="default">September 2025 - Present</Badge>
            </div>
          }
          description="Teaching Assistant"
        >
          <p>
            Teaching and supporting students with their learning in Software Engineering and Programming Laboratory
            modules during lab sessions. Marking coursework and providing feedback to student to help improve their work
            and understanding.
          </p>
        </Experience>
        <Experience
          title={
            <div className="inline-flex items-center gap-2">
              <h3>Amadeus</h3>
              <Badge variant="default">July 2024 - September 2025</Badge>
            </div>
          }
          description="Software Developer Intern"
        >
          <p>
            Developed internal tools to improve flight safety and payload optimisation of high-capacity jet transport
            aircraft by visualisation of critical data using the International Air Transport Association (IATA) X565 XML
            standard. Implemented calculations to validate the accuracy of center of gravity influence of passengers,
            cargo and fuel on loaded aircraft prior to take off. Built with Angular and TypeScript and deployed to Azure
            on a multi-environment solution using CI/CD with GitHub Actions.
          </p>
        </Experience>
        <Experience
          title={
            <div className="inline-flex items-center gap-2">
              <h3>Royal Holloway</h3>
              <Badge variant="default">June 2023 - September 2023</Badge>
            </div>
          }
          description="Research Assistant"
        >
          <p>
            Developed embedded firmware for a custom hardware platform to interact with the EV3 ecosystem of motors and
            sensors using C and C++. Successfully integrated drivers for motors and sensors that could be controlled by
            the board.
          </p>
        </Experience>
      </div>
    </div>
  )
}

export { Professional }
