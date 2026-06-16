"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  className = "",
  y = 48,
  delay = 0,
  duration = 1.1,
  start = "top 88%",
  scrub = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const scrollTriggerConfig = {
        trigger: el,
        start,
        ...(scrub
          ? { scrub: true }
          : { toggleActions: "play none none none" }),
      };

      gsap.from(el, {
        y,
        opacity: 0,
        duration: scrub ? 1 : duration,
        delay,
        ease: "power3.out",
        scrollTrigger: scrollTriggerConfig,
      });
    }, ref);

    return () => ctx.revert();
  }, [y, delay, duration, start, scrub]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
