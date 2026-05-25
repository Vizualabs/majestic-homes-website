export const projects = [
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

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
