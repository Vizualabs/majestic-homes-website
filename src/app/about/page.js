import AboutHero from "@/sections/AboutHero";
import AboutVisionMission from "@/sections/AboutVisionMission";

export const metadata = {
  title: "About | Majestic Homes",
  description: "Crafted with precision and defined by vision.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutVisionMission />
    </>
  );
}
