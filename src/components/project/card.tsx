import { Badge } from '@/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import React, { JSX, ReactNode } from 'react';
import { GoBadge } from '@/components/badges/go-badge';
import { RustBadge } from '@/components/badges/rust-badge';
import { TypeScriptBadge } from '@/components/badges/typescript-badge';
import { CBadge } from '@/components/badges/c-badge';

interface Props {
  title: string;
  body?: ReactNode;
  badges?: {
    text?: string;
    colour?: string;
  }[];
}

export const ProjectCard: React.FC<Props> = ({ title, body, badges }): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{body}</CardContent>

      <CardFooter>
        {badges?.map((badge, index) => (
          <Badge
            variant="default"
            key={index}
            className={`mr-2 mb-2 bg-${badge.colour ?? 'white'}-500 text-white`}
          >
            {badge.text}
          </Badge>
        ))}
        <GoBadge />
        <RustBadge />
        <TypeScriptBadge />
        <CBadge />
      </CardFooter>
    </Card>
  );
};
