import {
  ANGULAR_BADGE,
  AZURE_BADGE,
  BadgeProps,
  C_BADGE,
  CPP_BADGE,
  GO_BADGE,
  JAVA_BADGE,
  PYTHON_BADGE,
  REACT_BADGE,
  SQL_BADGE,
  TYPESCRIPT_BADGE,
} from '@/components/project/badges';
import { Building2, Computer, University } from 'lucide-react';
import { ReactNode } from 'react';

export interface ExperienceProps {
  /**
   * List of experience.
   *
   * @default []
   */
  experience?: ExperienceProp[];
}

export interface ExperienceProp {
  /**
   * Title of the experience.
   */
  title: string;
  /**
   * Icon alongside the title.
   *
   * @default Building2 icon from lucide-react
   */
  icon?: ReactNode;
  /**
   * Location of the experience.
   */
  location: string;
  /**
   * Body of the experience.
   *
   * @default undefined
   */
  body?: ReactNode;
  /**
   * Time period or span of the experience.
   *
   * @default undefined
   */
  span?: ReactNode;
  /**
   * Badges for the footer of the experience.
   *
   * @default undefined
   */
  badges?: BadgeProps[];
}

export const DEFAULT_EXPERIENCES: ExperienceProps = {
  experience: [],
};

export const DEFAULT_EXPERIENCE: ExperienceProp = {
  title: 'Title',
  icon: <Building2 className="h-5 w-5 text-muted-foreground" />,
  location: 'Location',
  body: undefined,
  span: undefined,
  badges: undefined,
};

export const MOHC_EXPERIENCE: ExperienceProp = {
  ...DEFAULT_EXPERIENCE,
  title: 'Junior Fullstack Developer',
  location: 'MOHC',
  body: <p></p>,
  span: <p>Oct 2025 - Present</p>,
  badges: [REACT_BADGE, GO_BADGE, TYPESCRIPT_BADGE],
};

export const UNIVERSITY_EXPERIENCE: ExperienceProp = {
  ...DEFAULT_EXPERIENCE,
  title: 'Student',
  icon: <University className="h-5 w-5 text-muted-foreground" />,
  location: 'Royal Holloway, University of London',
  body: (
    <p>
      BSc Computer Science with Year In Industry. Currently going into my third year of university
      after completing my year in industry at Amadeus.
    </p>
  ),
  span: <p>Sep 2022 - Present</p>,
  badges: [JAVA_BADGE, PYTHON_BADGE, SQL_BADGE],
};

export const AMADEUS_EXPERIENCE: ExperienceProp = {
  ...DEFAULT_EXPERIENCE,
  title: 'Software Development Engineer Intern',
  location: 'Amadeus, London',
  body: (
    <p>
      Worked on a project for validating critical flight safety data through visualisation and
      comparison. Developed a frontend application using Angular in an agile environment. Deployed
      cloud native applications with Azure with multiple development phases and environments.
    </p>
  ),
  span: <p>Jul 2024 - Sep 2025</p>,
  badges: [ANGULAR_BADGE, TYPESCRIPT_BADGE, AZURE_BADGE],
};

export const COMPETITIONS_DIRECTOR_EXPERIENCE: ExperienceProp = {
  ...DEFAULT_EXPERIENCE,
  title: 'Competitions Director',
  icon: <Computer className="h-5 w-5 text-muted-foreground" />,
  location: 'Computing Society, Royal Holloway, University of London',
  body: (
    <p>
      Working as a team to run the Computing Society with more focus on organising this years{' '}
      <a
        className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        href="https://www.royalhackaway.com/"
        target="_blank"
      >
        Royal Hackaway v9
      </a>
      .
    </p>
  ),
  span: <p>2025 - Present</p>,
};

export const RESEARCH_ASSISTANT_EXPERIENCE: ExperienceProp = {
  ...DEFAULT_EXPERIENCE,
  title: 'Research Assistant',
  icon: <University className="h-5 w-5 text-muted-foreground" />,
  location: 'Royal Holloway, University of London',
  body: (
    <p>
      Assisted in the development of the{' '}
      <a
        className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        href="https://github.com/OpenBotBrain"
        target="_blank"
      >
        Open Bot Brain project
      </a>
      . An open source and hackable project to control robots using custom made boards and firmware.
    </p>
  ),
  span: <p>2023 - 2024</p>,
  badges: [C_BADGE, CPP_BADGE],
};

export const TREASURER_EXPERIENCE: ExperienceProp = {
  ...DEFAULT_EXPERIENCE,
  title: 'Treasurer',
  icon: <Computer className="h-5 w-5 text-muted-foreground" />,
  location: 'Computing Society, Royal Holloway, University of London',
  body: (
    <p>
      Working as a part of a team to run the Computing Society, managing finances and organising of{' '}
      <a
        className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        href="https://www.royalhackaway.com/"
        target="_blank"
      >
        Royal Hackaway v7
      </a>
      .
    </p>
  ),
  span: <p>2023 - 2024</p>,
};
