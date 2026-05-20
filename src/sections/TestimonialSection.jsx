export default function TestimonialSection() {
  return (
    <section className="w-full bg-zinc-950 text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32 lg:px-20">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-20">
          <h2 className="font-serif text-4xl italic leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Trust, Built Into
            <br />
            Every Wall.
          </h2>

          <figure className="max-w-xl">
            <span
              aria-hidden="true"
              className="block font-serif text-5xl italic leading-none text-white sm:text-6xl md:text-7xl"
            >
              &ldquo;
            </span>

            <blockquote className="mt-2 font-serif text-base italic leading-relaxed text-zinc-200 sm:text-lg md:text-xl">
              They didn&rsquo;t just hear our brief &mdash; they understood what we hadn&rsquo;t
              yet found the words to say. The result is a home that feels like it was always
              meant to exist.
            </blockquote>

            <figcaption className="mt-8 space-y-1 sm:mt-10">
              <p className="font-serif text-base italic text-white md:text-lg">
                Arjun &amp; Priya Selvam
              </p>
              <p className="font-serif text-sm italic text-zinc-400 md:text-base">
                The Meridian Residence
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
