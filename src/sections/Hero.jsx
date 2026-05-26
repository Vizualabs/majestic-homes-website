"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroIntro() {
  return (
    <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <h1 className="font-serif text-5xl italic leading-[1.15] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="hero-up d-100 block">Crafted.</span>
          <span className="hero-up d-200 block">Not Constructed.</span>
        </h1>
        <p className="hero-up d-300 mt-6 font-serif text-lg italic tracking-wide text-zinc-200 sm:text-xl md:text-2xl lg:text-3xl">
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
              <p className="mt-2 font-serif text-lg italic text-zinc-200 sm:text-xl md:text-2xl lg:text-3xl">
                Ongoing
              </p>
            </div>
            <div className="hero-up d-400 text-white">
              <p className="font-serif text-5xl italic leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                20+
              </p>
              <p className="mt-2 font-serif text-lg italic text-zinc-200 sm:text-xl md:text-2xl lg:text-3xl">
                Completed
              </p>
            </div>
          </div>
          <Link
            href="/#projects"
            className="hero-fade d-500 inline-flex w-full items-center justify-center border border-white/60 px-8 py-3 font-serif text-base italic tracking-wide text-white transition hover:bg-white hover:text-zinc-950 sm:px-10 sm:py-4 sm:text-lg md:text-xl"
          >
            Explore projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function HeroAbout() {
  return (
    <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <h2 className="font-serif text-5xl italic leading-[1.15] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">We Build What</span>
          <span className="block">Others Only</span>
          <span className="block">Imagine.</span>
        </h2>
      </div>

      <div className="flex flex-col justify-end gap-5 md:gap-6">
        <p className="font-serif text-lg italic leading-relaxed text-zinc-200 sm:text-xl md:text-2xl lg:text-3xl">
          Majestic Homes was founded on a quiet but radical belief that architecture should not
          simply occupy space. It should transform it. We are a team of architects, thinkers, and
          craftspeople who treat every brief as an invitation to do something that has never quite
          been done before.
        </p>
        <Link
          href="/#about"
          className="w-fit border-b border-white/60 pb-0.5 font-serif text-lg italic text-white transition hover:border-white sm:text-xl md:text-2xl lg:text-3xl"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default function Hero() {
  const wrapRef = useRef(null);
  const pinRef = useRef(null);
  const bgRef = useRef(null);
  const introRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const pin = pinRef.current;
    const bg = bgRef.current;
    const intro = introRef.current;
    const about = aboutRef.current;

    if (!wrap || !pin || !bg || !intro || !about) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(about, { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }

      gsap.set(about, { opacity: 0, y: 72 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=115%",
          pin,
          scrub: 1.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(bg, { scale: 1.12, yPercent: 10, ease: "none" }, 0);
      tl.to(intro, { opacity: 0, y: -56, ease: "power2.inOut" }, 0);
      tl.to(about, { opacity: 1, y: 0, ease: "power3.out" }, 0.32);
    }, wrap);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);


  return (
    <div ref={wrapRef} className="relative">
      <section
        ref={pinRef}
        className="relative isolate flex h-screen w-full flex-col overflow-hidden"
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
          <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-10 sm:px-6 md:px-12 md:pb-20 lg:px-20">
            <div ref={introRef} className="hero-up-layer">
              <HeroIntro />
            </div>
            <div
              ref={aboutRef}
              className="absolute inset-x-5 bottom-10 opacity-0 sm:inset-x-6 md:inset-x-12 md:bottom-20 lg:inset-x-20"
            >
              <HeroAbout />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
