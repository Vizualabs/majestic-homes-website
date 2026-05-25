import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">
        {project.category}
      </p>
      <h1 className="mt-3 font-serif text-4xl italic text-white md:text-6xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-zinc-300 md:text-2xl">
        {project.summary}
      </p>
      <Link
        href="/#projects"
        className="mt-10 inline-block font-serif text-base italic text-zinc-200 underline-offset-4 hover:text-white hover:underline md:text-xl"
      >
        Back to projects
      </Link>
    </div>
  );
}
