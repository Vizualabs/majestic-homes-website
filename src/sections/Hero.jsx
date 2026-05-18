"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Slide1() {
  return (
    <div className="grid items-end gap-12 md:grid-cols-2">
      <div>
        <h1 className="font-serif text-5xl italic leading-[1.3] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-7xl">
          <span className="hero-up d-100 block">Crafted.</span>
          <span className="hero-up d-200 block">Not Constructed.</span>
        </h1>
        <p className="hero-up d-300 mt-6 text-sm tracking-wide text-zinc-200 md:text-base">
          Architecture <span className="mx-1 text-zinc-400">·</span> Interiors
          <span className="mx-1 text-zinc-400">·</span> Landscape
        </p>
      </div>

      <div className="flex flex-col items-start gap-8 md:items-end">
        <div className="flex flex-col gap-7">
          <div className="flex items-end gap-12">
            <div className="hero-up d-300 text-white">
              <p className="font-serif text-7xl italic leading-none md:text-8xl">05+</p>
              <p className="mt-3 font-serif text-xl italic text-zinc-200 md:text-4xl">ongoing</p>
            </div>
            <div className="hero-up d-400 text-white">
              <p className="font-serif text-7xl italic leading-none md:text-8xl">20+</p>
              <p className="mt-3 font-serif text-xl italic text-zinc-200 md:text-4xl">Completed</p>
            </div>
          </div>
          <Link
            href="/#projects"
            className="hero-fade d-500 inline-flex w-full items-center justify-center border border-white/60 px-10 py-4 text-base tracking-wide text-white transition hover:bg-white hover:text-zinc-950"
          >
            Explore projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="grid items-end gap-12 md:grid-cols-2">
      <div>
        <h1 className="font-serif text-5xl italic leading-[1.3] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-7xl">
          <span className="hero-up d-100 block">We Build What</span>
          <span className="hero-up d-200 block">Others Only</span>
          <span className="hero-up d-300 block">Imagine.</span>
        </h1>
      </div>

      <div className="flex flex-col justify-end gap-6">
        <p className="hero-up d-200 font-serif italic leading-relaxed text-zinc-200 text-lg md:text-2xl">
          Majestic Homes was founded on a quiet but radical belief that architecture should not
          simply occupy space. It should transform it. We are a team of architects, thinkers, and
          craftspeople who treat every brief as an invitation to do something that has never quite
          been done before.
        </p>
        <Link
          href="/#about"
          className="hero-fade d-400 w-fit border-b border-white/60 pb-0.5 text-lg font-serif italic text-white transition hover:border-white md:text-2xl"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

const slides = [Slide1, Slide2];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const SlideContent = slides[current];

  return (
    <section className="relative isolate flex min-h-screen w-full flex-col overflow-hidden">
      <Image
        src="/assets/hero.jpg"
        alt="Majestic Homes architectural showcase"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

      <div className="relative flex flex-1 flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1500px] px-6 pb-12 md:px-12 lg:px-20 md:pb-20">
          <SlideContent key={key} />
        </div>
      </div>
    </section>
  );
}
