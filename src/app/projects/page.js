import ProjectsHero from "@/sections/ProjectsHero";
import ProjectsSection from "@/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <div className="bg-zinc-950 px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <ProjectsSection />
        </div>
      </div>
    </>
  );
}
