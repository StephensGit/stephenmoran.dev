import type { Project } from "@/data/projects";

type ProjectRowProps = {
  project: Project;
  index: number;
};

export function ProjectRow({ project, index }: ProjectRowProps) {
  const number = String(index + 1).padStart(2, "0");

  const row = (
    <div className="grid grid-cols-[2rem_1fr] items-baseline gap-x-4 gap-y-2 py-[clamp(20px,2.8vw,28px)] sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6">
      <span className="font-mono text-[11.5px] tracking-[0.08em] text-foreground/50">
        {number}
      </span>
      <h3 className="text-[clamp(21px,2.8vw,27px)] font-medium leading-[1.15] tracking-[-0.022em] text-foreground transition-colors group-hover:text-accent group-focus-visible:text-accent">
        {project.title}
      </h3>
      <p className="col-start-2 max-w-md text-[15.5px] leading-[1.6] text-foreground/62 sm:max-w-lg">
        {project.description}
      </p>
      <span className="col-span-2 font-mono text-[11.5px] tracking-[0.08em] text-foreground/50 sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:justify-self-end">
        {project.year}
      </span>
    </div>
  );

  if (!project.href) {
    return <li className="border-b border-line first:border-t">{row}</li>;
  }

  return (
    <li className="border-b border-line transition-colors first:border-t hover:border-b-foreground focus-within:border-b-foreground">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline-none"
      >
        {row}
      </a>
    </li>
  );
}
