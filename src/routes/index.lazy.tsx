import { ProjectGrid } from '@/components/project/grid';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Page,
});

function Page() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>

      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3">
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
}
