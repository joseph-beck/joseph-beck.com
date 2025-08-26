import { Badge } from '@/ui/badge';
import { JSX } from 'react';
import { BadgeProps } from './badges';

interface Props extends BadgeProps {}

export const ProjectBadge = ({ text, icon, colour, textColour, variant }: Props): JSX.Element => {
  return (
    <Badge variant={variant} className={`mr-2 mb-2 ${colour} ${textColour}`}>
      {icon}
      {text}
    </Badge>
  );
};
