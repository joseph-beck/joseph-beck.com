import { JSX } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { TypewriterEffectSmooth } from '@/ui/typewriter-effect';

import { ExperienceCard } from './experience-card';
import {
  AMADEUS_EXPERIENCE,
  COMPETITIONS_DIRECTOR_EXPERIENCE,
  ExperienceProps,
  MOHC_EXPERIENCE,
  RESEARCH_ASSISTANT_EXPERIENCE,
  TEACHING_ASSISTANT_EXPERIENCE,
  TREASURER_EXPERIENCE,
  UNIVERSITY_EXPERIENCE,
} from './experiences';

export const Experience = (): JSX.Element => {
  const experience: ExperienceProps = {
    experience: [MOHC_EXPERIENCE, TEACHING_ASSISTANT_EXPERIENCE, AMADEUS_EXPERIENCE],
  };

  const education: ExperienceProps = {
    experience: [UNIVERSITY_EXPERIENCE],
  };

  const extracurricular: ExperienceProps = {
    experience: [COMPETITIONS_DIRECTOR_EXPERIENCE, TREASURER_EXPERIENCE, RESEARCH_ASSISTANT_EXPERIENCE],
  };

  const words = [
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
      <div className="flex w-full justify-center">
        <Tabs defaultValue="experience" className="w-full max-w-4xl">
          <TabsList className="w-full justify-center">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="extracurricular">Extracurricular</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <ExperienceCard {...experience} />
          </TabsContent>
          <TabsContent value="education">
            <ExperienceCard {...education} />
          </TabsContent>
          <TabsContent value="extracurricular">
            <ExperienceCard {...extracurricular} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
