import { ExperienceTimeline } from '@/components/experience/timeline';
import { Home } from '@/components/home/home';
import { ProjectGrid } from '@/components/project/grid';
import { Separator } from '@/ui/separator';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Page,
});

function Page() {
  return (
    <div className="p-2">
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3">
          <Home />

          <Separator className="mb-6" />

          <ProjectGrid />

          <Separator className="mt-6" />

          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
