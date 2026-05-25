"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CallToActionSection() {
  return (
    <section className="w-full bg-white text-zinc-950">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center px-5 py-14 text-center sm:px-6 sm:py-20 md:px-12 md:py-28 lg:px-20">
        <ScrollReveal y={40}>
          <h2 className="font-serif text-4xl italic leading-tight text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Build Your dream
          </h2>
        </ScrollReveal>

        <ScrollReveal y={32} delay={0.2}>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-w-[160px] items-center justify-center bg-zinc-950 px-8 py-3 font-serif text-lg italic text-white transition hover:bg-zinc-800 sm:mt-10 sm:min-w-[180px] sm:px-10 sm:py-4 sm:text-xl md:mt-12 md:text-2xl"
          >
            Call Now
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
