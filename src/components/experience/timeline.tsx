import { JSX } from 'react';
import {
  AMADEUS_EXPERIENCE,
  COMPETITIONS_DIRECTOR_EXPERIENCE,
  ExperienceProps,
  RESEARCH_ASSISTANT_EXPERIENCE,
  TREASURER_EXPERIENCE,
  UNIVERSITY_EXPERIENCE,
} from './experiences';
import { Experience } from './experience';

const EXPERIENCE: ExperienceProps = {
  experience: [
    UNIVERSITY_EXPERIENCE,
    AMADEUS_EXPERIENCE,
    COMPETITIONS_DIRECTOR_EXPERIENCE,
    RESEARCH_ASSISTANT_EXPERIENCE,
    TREASURER_EXPERIENCE,
  ],
};

export const ExperienceTimeline = (): JSX.Element => {
  return <Experience {...EXPERIENCE} />;
};
