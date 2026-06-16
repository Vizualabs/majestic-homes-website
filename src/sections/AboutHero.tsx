export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[72svh] w-full overflow-hidden bg-[#141111] text-white sm:min-h-[78svh] lg:min-h-screen">
      <div className="mx-auto flex min-h-[72svh] w-full max-w-[1500px] items-end px-5 pb-24 pt-28 sm:min-h-[78svh] sm:px-6 sm:pb-28 sm:pt-32 md:px-12 md:pb-32 lg:min-h-screen lg:px-20 lg:pb-36">
        <h1 className="max-w-full font-serif text-[clamp(3rem,15vw,4.8rem)] font-normal italic leading-[1.08] tracking-wide text-white sm:text-[clamp(4rem,7vw,5.75rem)]">
          <span className="block sm:whitespace-nowrap">Crafted with Precision.</span>
          <span className="block">Defined by Vision.</span>
        </h1>
      </div>
    </section>
  );
}
