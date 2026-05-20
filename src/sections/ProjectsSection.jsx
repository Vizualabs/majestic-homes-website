import ProjectCard from "@/components/ProjectCard";

const featuredProjects = [
  {
    id: "modern-villa",
    title: "Modern Villa",
    category: "Residential",
    summary: "A tropical-modern residence focused on natural light and premium finishes.",
  },
  {
    id: "skyline-residences",
    title: "Skyline Residences",
    category: "Multi-unit",
    summary: "Contemporary apartment design with optimized structural and utility planning.",
  },
  {
    id: "courtyard-house",
    title: "Courtyard House",
    category: "Custom Build",
    summary: "Privacy-driven layout balancing climate responsiveness with elegant details.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">Projects</p>
        <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Recent work</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
