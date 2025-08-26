import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import React, { JSX } from 'react';
import { ProjectBadge } from './badge';
import { CardProps } from './cards';

interface Props extends CardProps {
  _?: void;
}

export const ProjectCard: React.FC<Props> = ({ title, body, badges }: Props): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{body}</CardContent>

      <CardFooter>
        <div className="flex w-full flex-wrap gap-1">
          {badges?.map((badge, index) => (
            <ProjectBadge key={index} {...badge} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
