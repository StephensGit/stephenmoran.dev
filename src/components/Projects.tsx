import { ProjectRow } from "@/components/ProjectRow";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground"
      >
        Projects
      </h2>
      <ol className="mt-6">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </ol>
    </section>
  );
}
