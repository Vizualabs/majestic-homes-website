import Link from "next/link";

export default function ProjectCard({ id, title, category, summary }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
      <p className="text-xs uppercase tracking-wider text-zinc-400">{category}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{summary}</p>
      <Link
        href={`/projects/${id}`}
        className="mt-4 inline-flex text-sm font-medium text-zinc-100 underline-offset-4 hover:underline"
      >
        View project
      </Link>
    </article>
  );
}
