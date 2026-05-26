export default function ServicesHero() {
  return (
    <section className="relative isolate flex min-h-[88vh] w-full flex-col overflow-hidden bg-[#141111] sm:min-h-[92vh]">
      <div className="relative flex flex-1 flex-col">
        <div className="flex-1" />
        <div className="mx-auto mb-16 w-full max-w-[1500px] px-5 pb-9 sm:mb-20 sm:px-6 md:mb-28 md:px-12 md:pb-11 lg:mb-36 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl italic leading-[1.15] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Every Space Begins</span>
              <span className="block">with a Decision.</span>
            </h1>
            <p className="mt-6 font-serif text-lg italic leading-relaxed text-zinc-200 sm:text-xl md:text-2xl lg:text-3xl">
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
