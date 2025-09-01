import { Calendar } from 'lucide-react';
import { JSX } from 'react';
import { ProjectBadge } from '@/components/project/badge';
import { ExperienceProps } from './experiences';

interface Props extends ExperienceProps {
  _?: void;
}

export const Experience = ({ experience }: Props): JSX.Element => {
  return (
    <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experience?.map(({ location, body, span, badges, title, icon }, index) => (
          <div key={index} className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                  {icon}
                </div>
                <span className="text-base sm:text-lg font-semibold">{location}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{span}</span>
                </div>
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{body}</div>
              <div className="flex flex-wrap gap-2">
                {badges?.map((badge, index) => (
                  <ProjectBadge key={index} {...badge} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
