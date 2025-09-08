import { GithubIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">joseph beck</span>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <nav className="flex flex-col items-center gap-2 md:flex-row">
            <a href="#home" className="text-sm hover:underline">
              home
            </a>
            <a href="#projects" className="text-sm hover:underline">
              projects
            </a>
            <a href="#experience" className="text-sm hover:underline">
              experience
            </a>
          </nav>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/josephbbeck/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="https://github.com/joseph-beck" target="_blank" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
