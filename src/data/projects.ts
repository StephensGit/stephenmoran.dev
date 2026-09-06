export type Project = {
  title: string;
  description: string;
  year: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Project Resume",
    description:
      "A tool for developers to build a living, project-focused record of their engineering work.",
    year: "2026",
  },
  {
    title: "Pace Lab",
    description:
      "A running-focused project for exploring training, pacing and performance data.",
    year: "2026",
  },
  {
    title: "Dublin Coffee Guide",
    description: "An independent guide to coffee shops around Dublin.",
    year: "2025",
  },
  {
    title: "Chrome Extensions",
    description: "A place for small browser tools and experiments.",
    year: "Ongoing",
  },
];
