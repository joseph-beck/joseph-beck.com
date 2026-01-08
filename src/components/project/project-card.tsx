import { Link } from '@tanstack/react-router';
import { SquareArrowOutUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import React, { JSX } from 'react';

import { isDefined } from '@/lib/is/is-defined';
import { isNonEmptyArray } from '@/lib/is/is-non-empty-array';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';

import { ProjectBadge } from './project-badge';
import { ProjectCardProps } from './project-cards';

interface Props extends ProjectCardProps {
  _?: void;
}

export const ProjectCard: React.FC<Props> = ({ title, body, badges, link }: Props): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="bg-transparent backdrop-blur-[2px] hover:scale-[1.02] transition-transform duration-300">
        <CardHeader>
          <CardTitle>
            {isDefined(link) ? (
              <Link
                to={link.href}
                target={link.target ?? '_blank'}
                className="flex flex-row items-center gap-0.5 hover:underline"
              >
                {title} <SquareArrowOutUpRight size={12} />
              </Link>
            ) : (
              title
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>{body}</CardContent>
        <CardFooter>
          <div className="flex w-full flex-wrap gap-1">
            {isNonEmptyArray(badges)
              ? badges.map((badge, index) => <ProjectBadge key={index} {...badge} />)
              : undefined}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
