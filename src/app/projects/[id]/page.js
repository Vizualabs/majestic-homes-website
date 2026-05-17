export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Project Details</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">{id?.replaceAll("-", " ")}</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">
        This is a placeholder dynamic project page. Replace this section with actual project
        overview, gallery, scope, and construction timeline data.
      </p>
    </div>
  );
}
