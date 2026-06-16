export default function ProjectsHero() {
  return (
    <section className="relative isolate flex min-h-[72svh] w-full items-center overflow-hidden bg-[#141111] text-white sm:min-h-[78svh] lg:min-h-screen">
      <div className="mx-auto flex w-full max-w-[1500px] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <h1 className="text-balance font-serif text-[clamp(3.25rem,13vw,7.5rem)] font-normal italic leading-[1.08] tracking-wide">
            <span className="block">Design to</span>
            <span className="block">Engineering</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
