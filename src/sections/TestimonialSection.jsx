"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-zinc-950 text-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-32 lg:px-20">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.95fr)] md:gap-20 lg:gap-28">
          <ScrollReveal y={56}>
            <h2 className="font-serif text-[clamp(3.35rem,6.4vw,7rem)] italic leading-[1.08] text-white">
              <span className="whitespace-nowrap">Trust, Built Into</span>
              <br />
              Every Wall.
            </h2>
          </ScrollReveal>

          <ScrollReveal y={56} delay={0.15}>
            <figure className="max-w-2xl">
              <span
                aria-hidden="true"
                className="block font-serif text-5xl italic leading-none text-white sm:text-6xl"
              >
                &ldquo;
              </span>

              <blockquote className="mt-2 font-serif text-xl italic leading-[1.35] text-zinc-100 sm:text-2xl md:text-[1.6rem] lg:text-[1.9rem]">
                They didn&rsquo;t just hear our brief &mdash; they understood what we hadn&rsquo;t
                yet found the words to say. The result is a home that feels like it was always
                meant to exist.
              </blockquote>

              <figcaption className="mt-10 space-y-2 sm:mt-12">
                <p className="font-serif text-xl italic text-white sm:text-2xl md:text-[1.7rem]">
                  Arjun &amp; Priya Selvam
                </p>
                <p className="font-serif text-base italic text-zinc-400 sm:text-lg md:text-xl">
                  The Meridian Residence
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
