export default function ServicesHero() {
  return (
    <section className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-[#141111]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-1 items-center px-5 py-28 sm:px-6 sm:py-32 md:px-12 lg:px-20">
        <div className="w-full">
          <div className="max-w-4xl">
            <h1 className="text-balance font-serif text-[clamp(3.25rem,8vw,8rem)] font-normal italic leading-[1.08] tracking-wide text-white">
              <span className="block">Every Space Begins</span>
              <span className="block">with a Decision.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-pretty font-serif text-lg font-normal italic leading-relaxed text-zinc-200 sm:text-xl md:text-2xl lg:text-3xl">
              We offer a considered set of services each one a discipline in its own right,
              each one practiced with the same commitment to precision, craft, and the human
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
