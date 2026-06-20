"use client";
import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Completed", value: "completed" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="w-full bg-white text-zinc-950">
      <div className="w-full pt-10 sm:pt-16 md:pt-24">
        <div className="flex justify-center gap-2 px-4 xs:gap-3 sm:gap-16 md:gap-24">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`min-w-0 px-3 py-2 font-serif text-base italic leading-none transition sm:min-w-24 sm:px-7 sm:py-3 sm:text-2xl md:text-3xl ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              priority={index === 0}
              className={index % 5 < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}