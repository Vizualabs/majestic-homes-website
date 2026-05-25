"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Slide1() {
  return (
    <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <h1 className="font-serif text-4xl italic leading-[1.2] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="hero-up d-100 block">Crafted.</span>
          <span className="hero-up d-200 block">Not Constructed.</span>
        </h1>
        <p className="hero-up d-300 mt-5 text-xs tracking-wide text-zinc-200 sm:text-sm md:text-base">
          Architecture <span className="mx-1 text-zinc-400">·</span> Interiors
          <span className="mx-1 text-zinc-400">·</span> Landscape
        </p>
      </div>

      <div className="flex flex-col items-start gap-6 md:items-end md:gap-8">
        <div className="flex w-full flex-col gap-6 md:w-auto md:gap-7">
          <div className="flex items-end gap-8 sm:gap-12">
            <div className="hero-up d-300 text-white">
              <p className="font-serif text-5xl italic leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                05+
              </p>
              <p className="mt-2 font-serif text-base italic text-zinc-200 sm:text-lg md:text-2xl lg:text-4xl">
                Ongoing
              </p>
            </div>
            <div className="hero-up d-400 text-white">
              <p className="font-serif text-5xl italic leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                20+
              </p>
              <p className="mt-2 font-serif text-base italic text-zinc-200 sm:text-lg md:text-2xl lg:text-4xl">
                Completed
              </p>
            </div>
          </div>
          <Link
            href="/#projects"
            className="hero-fade d-500 inline-flex w-full items-center justify-center border border-white/60 px-8 py-3 text-sm tracking-wide text-white transition hover:bg-white hover:text-zinc-950 sm:px-10 sm:py-4 sm:text-base"
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
    <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <h1 className="font-serif text-4xl italic leading-[1.2] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="hero-up d-100 block">We Build What</span>
          <span className="hero-up d-200 block">Others Only</span>
          <span className="hero-up d-300 block">Imagine.</span>
        </h1>
      </div>

      <div className="flex flex-col justify-end gap-5 md:gap-6">
        <p className="hero-up d-200 font-serif italic leading-relaxed text-zinc-200 text-base sm:text-lg md:text-2xl">
          Majestic Homes was founded on a quiet but radical belief that architecture should not
          simply occupy space. It should transform it. We are a team of architects, thinkers, and
          craftspeople who treat every brief as an invitation to do something that has never quite
          been done before.
        </p>
        <Link
          href="/#about"
          className="hero-fade d-400 w-fit border-b border-white/60 pb-0.5 text-base font-serif italic text-white transition hover:border-white sm:text-lg md:text-2xl"
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
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        scale: 1.12,
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const SlideContent = slides[current];

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 -z-20 will-change-transform">
        <Image
          src="/assets/hero.jpg"
          alt="Majestic Homes architectural showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

      <div className="relative flex flex-1 flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-10 sm:px-6 md:px-12 md:pb-20 lg:px-20">
          <SlideContent key={key} />
        </div>
      </div>
    </section>
  );
}
