import { ProjectCard } from './card';

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard title="amp" />
      <ProjectCard title="rusted attractors" />
      <ProjectCard title="tuner" />
      <ProjectCard title="hangman robot" />
      <ProjectCard title="cordle bot" />
      <ProjectCard title="royal hackaway v7" />
      <ProjectCard title="rat" />
      <ProjectCard title="oaxaca" />
      <ProjectCard title="open bot brain" />
      <ProjectCard title="spotify wrapper" />
      <ProjectCard title="routey" />
    </div>
  );
};
