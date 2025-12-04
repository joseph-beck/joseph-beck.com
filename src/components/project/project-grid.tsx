import { JSX } from 'react';
import { ProjectCard } from './project-card';
import {
  AMP_CARD,
  BATTLESHIPS_CARD,
  ProjectCardProps,
  CORDLE_BOT_CARD,
  HANGMAN_ROBOT_CARD,
  JOSEPH_BECK_COM_CARD,
  OAXACA_CARD,
  OPEN_BOT_BRAIN_CARD,
  PEAR_CARD,
  RAT_CARD,
  ROUTEY_CARD,
  ROYAL_HACKAWAY_V7_CARD,
  RUSTED_ATTRACTORS_CARD,
  SPOTIFY_WRAPPER_CARD,
  TUNER_CARD,
} from './project-cards';
import { TypewriterEffectSmooth } from '@/ui/typewriter-effect';

export const ProjectGrid = (): JSX.Element => {
  const projectCards: ProjectCardProps[] = [
    TUNER_CARD,
    RUSTED_ATTRACTORS_CARD,
    AMP_CARD,
    HANGMAN_ROBOT_CARD,
    OPEN_BOT_BRAIN_CARD,
    CORDLE_BOT_CARD,
    JOSEPH_BECK_COM_CARD,
    ROYAL_HACKAWAY_V7_CARD,
    OAXACA_CARD,
    PEAR_CARD,
    RAT_CARD,
    SPOTIFY_WRAPPER_CARD,
    ROUTEY_CARD,
    BATTLESHIPS_CARD,
  ];

  const words = [
    {
      text: 'featured',
    },
    {
      text: 'projects',
      className: 'text-amber-600 dark:text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" id="projects">
      <div className="text-3xl font-semibold tracking-tight my-5">
        <TypewriterEffectSmooth words={words} cursorClassName="bg-amber-500 dark:bg-amber-500" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectCards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
