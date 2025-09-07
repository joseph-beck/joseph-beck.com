import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import React, { JSX } from 'react';
import { ProjectBadge } from './badge';
import { CardProps } from './cards';
import { motion } from 'motion/react';

interface Props extends CardProps {
  _?: void;
}

export const ProjectCard: React.FC<Props> = ({ title, body, badges }: Props): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
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
    </motion.div>
  );
};
