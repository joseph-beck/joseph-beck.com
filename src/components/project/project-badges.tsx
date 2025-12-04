import { ReactNode } from 'react';
import { DiMysql, DiPostgresql, DiFirebase, DiReact, DiAngularSimple } from 'react-icons/di';

export interface ProjectBadgeProps {
  /**
   * Text of the badge.
   */
  text: string;
  /**
   * Icon for the badge.
   *
   * @default undefined
   */
  icon?: ReactNode;
  /**
   * Text colour on the badge.
   *
   * @default text-white
   */
  textColour?: string;
  /**
   * Colour of the badge.
   * Uses a Tailwind CSS colour, for example `bg-blue-500`.
   *
   * @default bg-black
   */
  colour?: string;
  /**
   * Variant of the badge.
   *
   * @default default
   */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export const DEFAULT_BADGE: ProjectBadgeProps = {
  text: 'Badge',
  icon: undefined,
  textColour: 'text-white',
  colour: 'bg-black',
  variant: 'default',
};

export const GO_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Go',
  colour: 'bg-cyan-500',
};

export const RUST_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Rust',
  colour: 'bg-amber-600',
};

export const TYPESCRIPT_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'TypeScript',
  colour: 'bg-blue-500',
};

export const JAVASCRIPT_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'JavaScript',
  textColour: 'text-black',
  colour: 'bg-yellow-300',
};

export const C_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'C',
  colour: 'bg-gray-500',
};

export const CPP_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'C++',
  colour: 'bg-pink-500',
};

export const CS_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'C#',
  colour: 'bg-green-500',
};

export const JAVA_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Java',
  colour: 'bg-amber-500',
};

export const RUBY_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Ruby',
  colour: 'bg-red-700',
};

export const PYTHON_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Python',
  textColour: 'text-black',
  colour: 'bg-yellow-400',
};

export const REACT_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'React',
  icon: <DiReact />,
  colour: 'bg-sky-400',
};

export const SVELTE_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Svelte',
  colour: 'bg-orange-400',
};

export const ANGULAR_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Angular',
  icon: <DiAngularSimple />,
  colour: 'bg-red-600',
};

export const AZURE_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Azure',
  colour: 'bg-blue-400',
};

export const FIREBASE_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'Firebase',
  icon: <DiFirebase />,
  colour: 'bg-orange-500',
};

export const MYSQL_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'MySQL',
  icon: <DiMysql />,
  colour: 'bg-yellow-600',
};

export const POSTGRESQL_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'PostgreSQL',
  icon: <DiPostgresql />,
  colour: 'bg-sky-900',
};

export const SQL_BADGE: ProjectBadgeProps = {
  ...DEFAULT_BADGE,
  text: 'SQL',
  colour: 'bg-gray-700',
};
