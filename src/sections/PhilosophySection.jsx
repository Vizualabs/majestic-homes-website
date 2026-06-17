"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-[1500px] px-0 py-20 sm:py-24 md:py-28">
        <ScrollReveal className="mx-auto w-full max-w-[980px] px-6 text-center md:px-12">
          <h2 className="font-serif text-[clamp(3.75rem,8vw,5.75rem)] font-normal italic leading-none tracking-normal">
            <span className="block sm:inline">Our</span>{" "}
            <span className="block sm:inline">Philosophy</span>
          </h2>

          <p className="mx-auto mt-10 max-w-[980px] font-serif text-[clamp(1.35rem,2.7vw,2.05rem)] italic leading-[1.28] text-zinc-950">
            We believe that the spaces people inhabit shape who they become.
            <span className="hidden md:inline"> </span>
            <span className="block md:inline">
              A well-designed room can inspire clarity. A thoughtful corridor
            </span>
            <span className="block">can invite calm.</span>
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block border-b-2 border-zinc-950 pb-1 font-serif text-xl italic leading-none text-zinc-950 transition hover:border-zinc-600 hover:text-zinc-600"
          >
            Read More
          </Link>
        </ScrollReveal>

        <div className="relative mt-20 h-[480px] w-full overflow-hidden sm:h-[620px] md:mt-24 md:h-[740px] lg:h-[860px]">
          <ScrollReveal
            className="absolute left-0 top-0 h-[61%] w-[54%] overflow-hidden shadow-xl"
            y={72}
            delay={0}
            start="top 85%"
          >
            <Image
              src="/assets/Home1.jpg"
              alt="Majestic Homes project one"
              fill
              sizes="(max-width: 768px) 52vw, 780px"
              className="object-cover"
            />
          </ScrollReveal>

          <ScrollReveal
            className="absolute left-[20%] top-[14%] h-[65%] w-[58%] overflow-hidden shadow-2xl"
            y={56}
            delay={0.12}
            start="top 82%"
          >
            <Image
              src="/assets/Home2.jpg"
              alt="Majestic Homes project two"
              fill
              sizes="(max-width: 768px) 57vw, 855px"
              className="object-cover"
            />
          </ScrollReveal>

          <ScrollReveal
            className="absolute right-0 top-[34%] h-[65%] w-[59%] overflow-hidden shadow-2xl"
            y={40}
            delay={0.24}
            start="top 80%"
          >
            <Image
              src="/assets/Home3.jpg"
              alt="Majestic Homes project three"
              fill
              sizes="(max-width: 768px) 58vw, 870px"
              className="object-cover"
            />
          </ScrollReveal>
        </div>

        <div className="mt-14 grid items-end gap-12 px-6 md:mt-20 md:grid-cols-2 md:px-12 lg:px-20">
          <ScrollReveal y={40}>
            <h3 className="font-serif text-[clamp(3.75rem,8vw,5.75rem)] italic leading-[1.05] tracking-normal">
              <span className="block">Where Vision</span>
              <span className="block">Becomes Space</span>
            </h3>
            <Link
              href="/projects"
              className="mt-8 inline-block font-serif text-xl italic text-zinc-900 underline-offset-4 hover:underline"
            >
              Explore more
            </Link>
          </ScrollReveal>

          <ScrollReveal
            className="flex items-end justify-start gap-12 md:justify-end lg:gap-16"
            y={40}
            delay={0.15}
          >
            <Stat number={5} label="ongoing" pad />
            <Stat number={20} label="Completed" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, pad = false }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frameId = requestAnimationFrame(() => setCount(number));
      return () => cancelAnimationFrame(frameId);
    }

    let frameId;
    let startTime;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * number));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [number]);

  const displayNumber = pad ? String(count).padStart(2, "0") : count;

  return (
    <div ref={ref}>
      <p className="font-serif text-[clamp(4rem,8vw,6rem)] italic leading-none">
        {displayNumber}+
      </p>
      <p className="mt-3 font-serif text-xl italic text-zinc-700 md:text-2xl">{label}</p>
    </div>
  );
}
