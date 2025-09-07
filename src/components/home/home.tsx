import { TypewriterEffectSmooth } from '@/ui/typewriter-effect';
import { ArrowBigDown } from 'lucide-react';
import { JSX } from 'react';

export const Home = (): JSX.Element => {
  const words = [
    {
      text: 'hi,',
    },
    {
      text: "i'm",
    },
    {
      text: 'joseph',
      className: 'text-amber-600 dark:text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" id="home">
      <div className="text-3xl font-semibold tracking-tight">
        <TypewriterEffectSmooth words={words} cursorClassName="bg-amber-500 dark:bg-amber-500" />
      </div>

      <div className="mt-10">
        <a href="#projects" className="flex flex-col items-center">
          view projects...
          <ArrowBigDown className="mt-3 animate-bounce" />
        </a>
      </div>
    </div>
  );
};
