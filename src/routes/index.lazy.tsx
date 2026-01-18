import { createLazyFileRoute } from '@tanstack/react-router';

import { Experience } from '@/components/experience/experience';
import Footer from '@/components/footer/footer';
import { Home } from '@/components/home/home';
import { ProjectGrid } from '@/components/project/project-grid';
import { Separator } from '@/ui/separator';

export const Route = createLazyFileRoute('/')({
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="flex justify-center relative z-10">
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3">
          <Home />
          <Separator className="mb-6" />
          <Experience />
          <Separator className="mt-6" />
          <ProjectGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}
