import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/lib/types";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = project.liveUrl || project.repoUrl;

  return (
    <TerminalWindow
      title={`${project.slug}/`}
      command="cat README.md"
      className="transition-all duration-200 hover:-translate-y-1 hover:border-accent-green/60 hover:shadow-lg hover:shadow-accent-green/5 motion-reduce:hover:translate-y-0"
    >
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-prose text-base leading-relaxed text-muted">
        {project.description}
      </p>

      {project.highlights ? (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span className="text-accent-green" aria-hidden="true">
                {">"}
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {hasLinks ? (
        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-cyan hover:underline"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Live demo
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-foreground hover:underline"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              Source
            </a>
          ) : null}
        </div>
      ) : null}
    </TerminalWindow>
  );
}
