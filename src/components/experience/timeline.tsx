import { JSX } from 'react';
import {
  AMADEUS_EXPERIENCE,
  COMPETITIONS_DIRECTOR_EXPERIENCE,
  ExperienceProps,
  MOHC_EXPERIENCE,
  RESEARCH_ASSISTANT_EXPERIENCE,
  TREASURER_EXPERIENCE,
  UNIVERSITY_EXPERIENCE,
} from './experiences';
import { Experience } from './experience';
import { TypewriterEffectSmooth } from '@/ui/typewriter-effect';

export const ExperienceTimeline = (): JSX.Element => {
  const experience: ExperienceProps = {
    experience: [
      MOHC_EXPERIENCE,
      AMADEUS_EXPERIENCE,
      UNIVERSITY_EXPERIENCE,
      COMPETITIONS_DIRECTOR_EXPERIENCE,
      RESEARCH_ASSISTANT_EXPERIENCE,
      TREASURER_EXPERIENCE,
    ],
  };

  const words = [
    {
      text: 'my',
    },
    {
      text: 'experience',
      className: 'text-amber-600 dark:text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" id="experience">
      <div className="text-3xl font-semibold tracking-tight mt-5">
        <TypewriterEffectSmooth words={words} cursorClassName="bg-amber-500 dark:bg-amber-500" />
      </div>

      <Experience {...experience} />
    </div>
  );
};
