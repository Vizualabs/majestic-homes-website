import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:px-10">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
