import { JSX } from 'react';
import { ProjectCard } from './card';
import {
  AMP_CARD,
  BATTLESHIPS_CARD,
  CardProps,
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
} from './cards';

const PROJECT_CARDS: CardProps[] = [
  AMP_CARD,
  RUSTED_ATTRACTORS_CARD,
  TUNER_CARD,
  HANGMAN_ROBOT_CARD,
  OPEN_BOT_BRAIN_CARD,
  CORDLE_BOT_CARD,
  JOSEPH_BECK_COM_CARD,
  ROYAL_HACKAWAY_V7_CARD,
  OAXACA_CARD,
  PEAR_CARD,
  SPOTIFY_WRAPPER_CARD,
  ROUTEY_CARD,
  RAT_CARD,
  BATTLESHIPS_CARD,
];

export const ProjectGrid = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {PROJECT_CARDS.map((card, index) => (
        <ProjectCard key={index} {...card} />
      ))}
    </div>
  );
};
