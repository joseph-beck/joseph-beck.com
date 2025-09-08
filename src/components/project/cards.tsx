import { ReactNode } from 'react';
import {
  BadgeProps,
  C_BADGE,
  CPP_BADGE,
  CS_BADGE,
  FIREBASE_BADGE,
  GO_BADGE,
  JAVA_BADGE,
  JAVASCRIPT_BADGE,
  MYSQL_BADGE,
  POSTGRESQL_BADGE,
  REACT_BADGE,
  RUBY_BADGE,
  RUST_BADGE,
  SVELTE_BADGE,
  TYPESCRIPT_BADGE,
} from './badges';

export interface CardProps {
  /**
   * Title of the card.
   * Displayed in the header of the card.
   */
  title: string;
  /**
   * Body of the card.
   * Displayed in the main content area of the card.
   *
   * @default undefined
   */
  body?: ReactNode;
  /**
   * Badges that are displayed in the footer of the card.
   *
   * @default undefined
   */
  badges?: BadgeProps[];
  /**
   * Link information for the card.
   *
   * @default undefined
   */
  link?: {
    /**
     * Label text.
     */
    label: string;
    /**
     * URL for the link.
     *
     * @default undefined
     */
    href?: string;
    /**
     * Target for the link
     *
     * @default _blank
     */
    target?: string;
  };
}

export const DEFAULT_CARD: CardProps = {
  title: 'Title',
  body: undefined,
  badges: undefined,
  link: undefined,
};

export const DEFAULT_LINK = {
  label: 'Link',
  href: undefined,
  target: '_blank',
};

export const AMP_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'amp',
  body: <p>a lightweight http router made using the go mux.</p>,
  badges: [GO_BADGE],
};

export const RUSTED_ATTRACTORS_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'rusted attractors',
  body: (
    <p>
      exploring a variety of chaotic attractors and dynamical systems in rust whilst using bevy to
      generate 3d shapes.
    </p>
  ),
  badges: [RUST_BADGE],
};

export const TUNER_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'tuner',
  body: (
    <p>
      our hack sussex project! a real-time quiz game using you and your friends favourite songs on
      spotify.
    </p>
  ),
  badges: [GO_BADGE, TYPESCRIPT_BADGE, REACT_BADGE],
};

export const HANGMAN_ROBOT_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'hangman robot',
  body: (
    <p>
      university team project, using ev3 and lejos to create robots. our group created a robot you
      can play hangman against!
    </p>
  ),
  badges: [JAVA_BADGE, RUBY_BADGE],
};

export const CORDLE_BOT_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'cordle bot',
  body: <p>a discord bot for playing wordle competitively with your friends.</p>,
  badges: [GO_BADGE, MYSQL_BADGE],
};

export const ROYAL_HACKAWAY_V7_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'royal hackaway v7',
  body: <p>website for royal hackaway v7 built with next.js.</p>,
  badges: [TYPESCRIPT_BADGE, REACT_BADGE],
};

export const PEAR_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'pear',
  body: <p>learning more about parsers by implementing a pratt parser.</p>,
  badges: [GO_BADGE],
};

export const OAXACA_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'oaxaca',
  body: <p>university team project, creating a full-stack application for a restaurant.</p>,
  badges: [GO_BADGE, TYPESCRIPT_BADGE, REACT_BADGE, POSTGRESQL_BADGE],
};

export const OPEN_BOT_BRAIN_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'open bot brain',
  body: (
    <p>
      an open source and hackable project to control robots. using a custom made board and firmware
      written in c using freertos to manage tasks.
    </p>
  ),
  badges: [C_BADGE, CPP_BADGE],
};

export const SPOTIFY_WRAPPER_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'spotify wrapper',
  body: (
    <p>
      providing a variety of different spotify user statistics using the spotify api and svelte.
    </p>
  ),
  badges: [JAVASCRIPT_BADGE, SVELTE_BADGE],
};

export const ROUTEY_CARD: CardProps = {
  title: 'routey',
  body: <p>an http router with basic html templating for web development written in golang.</p>,
  badges: [GO_BADGE],
};

export const RAT_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'rat',
  body: (
    <p>
      (r)eact (a)pp (t)emplate. a quick template repository for getting started with react,
      tailwind, tanstack and more!
    </p>
  ),
  badges: [TYPESCRIPT_BADGE, REACT_BADGE],
};

export const JOSEPH_BECK_COM_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'joseph-beck.com',
  body: <p>this website!</p>,
  badges: [TYPESCRIPT_BADGE, REACT_BADGE],
};

export const BATTLESHIPS_CARD: CardProps = {
  ...DEFAULT_CARD,
  title: 'battleships',
  body: <p>a multiplayer battleships game written for my computer science a-level nea.</p>,
  badges: [CS_BADGE, FIREBASE_BADGE],
};
