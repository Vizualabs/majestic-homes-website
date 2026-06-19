import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  return {
    title: project ? `${project.title} | Majestic Homes` : "Project | Majestic Homes",
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full bg-[#141111] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-3 py-24 sm:px-5 md:px-8 lg:px-12">
        <div className="mb-8 mt-8 md:mb-10 md:mt-16">
          <p className="font-serif text-lg italic text-zinc-400 md:text-xl">
            {project.category}
          </p>
          <h1 className="mt-2 font-serif text-[clamp(3.25rem,10vw,6rem)] italic leading-none">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl font-serif text-xl italic leading-[1.35] text-zinc-300 md:text-2xl">
            {project.description}
          </p>
        </div>

        <ProjectGallery images={project.images} title={project.title} />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-8">
          <div>
            <p className="font-serif text-2xl italic">Majestic Homes</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
              Designed and delivered with architectural discipline, construction
              clarity, and careful project coordination.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-sm text-zinc-300 sm:gap-12">
            <div>
              <p className="text-zinc-500">Status</p>
              <p className="mt-2">{project.category}</p>
            </div>
            <div>
              <p className="text-zinc-500">Type</p>
              <p className="mt-2">Residential</p>
            </div>
            <div>
              <p className="text-zinc-500">Gallery</p>
              <p className="mt-2">{project.images.length} Photos</p>
            </div>
          </div>

          <Link
            href="/projects"
            className="font-serif text-xl italic text-zinc-200 underline-offset-4 hover:text-white hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
}
