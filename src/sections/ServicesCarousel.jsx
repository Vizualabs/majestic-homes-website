"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { serviceSlides } from "@/data/serviceSlides";

const SLIDE_HOLD_MS = 4000;
const TRANSITION_DURATION = 1;
const DRAG_COMPLETE_DURATION = 0.7;
const SLIDE_COUNT = serviceSlides.length;
const SWIPE_THRESHOLD_PX = 50;
const DRAG_COMMIT_RATIO = 0.18;
const IMAGE_MAGNET_STRENGTH = 48;
const SLIDE_EASE = "power3.inOut";

function getSlideDirection(currentIdx, nextIdx) {
  const forward = (nextIdx - currentIdx + SLIDE_COUNT) % SLIDE_COUNT;
  const backward = (currentIdx - nextIdx + SLIDE_COUNT) % SLIDE_COUNT;
  return forward <= backward ? 1 : -1;
}

function resetMagneticTransforms(container) {
  if (!container) return;
  const inner = container.querySelector("[data-magnetic-inner]");
  if (inner) gsap.set(inner, { x: 0, y: 0 });
}

function resetImageInner(panel) {
  const inner = panel?.querySelector("[data-magnetic-inner]");
  if (!inner) return;
  gsap.set(inner, { x: 0, y: 0, scale: 1.08 });
}

function hideInactiveSlides(slides, currentIdx, targetIdx) {
  slides.forEach((el, i) => {
    if (!el || i === currentIdx || i === targetIdx) return;
    gsap.set(el, { opacity: 0, xPercent: 0, zIndex: 0 });
  });
}

function setPairPosition(currentEl, targetEl, currentX, targetX) {
  if (currentEl) gsap.set(currentEl, { opacity: 1, xPercent: currentX, zIndex: 1 });
  if (targetEl) gsap.set(targetEl, { opacity: 1, xPercent: targetX, zIndex: 2 });
}

export default function ServicesCarousel() {
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const imageColumnRef = useRef(null);
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const autoplayRef = useRef(null);
  const timelineRef = useRef(null);
  const goToSlideRef = useRef(null);
  const sectionRef = useRef(null);
  const touchStartXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const setVisibleSlide = useCallback((activeIndex) => {
    textRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        opacity: i === activeIndex ? 1 : 0,
        xPercent: 0,
        zIndex: i === activeIndex ? 1 : 0,
      });
    });
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        opacity: i === activeIndex ? 1 : 0,
        xPercent: 0,
        zIndex: i === activeIndex ? 1 : 0,
      });
      if (i === activeIndex) resetImageInner(el);
      else resetMagneticTransforms(el);
    });
  }, []);

  const applyDragProgress = useCallback(
    (progress) => {
      const currentIdx = indexRef.current;
      const p = gsap.utils.clamp(-1, 1, progress);

      if (Math.abs(p) < 0.01) {
        setVisibleSlide(currentIdx);
        return;
      }

      const targetIdx =
        p < 0
          ? (currentIdx + 1) % SLIDE_COUNT
          : (currentIdx - 1 + SLIDE_COUNT) % SLIDE_COUNT;

      const currentX = p * 100;
      const targetX = p < 0 ? 100 + p * 100 : -100 + p * 100;

      hideInactiveSlides(textRefs.current, currentIdx, targetIdx);
      hideInactiveSlides(imageRefs.current, currentIdx, targetIdx);

      setPairPosition(
        textRefs.current[currentIdx],
        textRefs.current[targetIdx],
        currentX,
        targetX
      );
      setPairPosition(
        imageRefs.current[currentIdx],
        imageRefs.current[targetIdx],
        currentX,
        targetX
      );
    },
    [setVisibleSlide]
  );

  const snapBackToCurrent = useCallback(() => {
    const currentIdx = indexRef.current;

    const tl = gsap.timeline({
      onComplete: () => setVisibleSlide(currentIdx),
    });

    const snapPanel = (el, i, isImage) => {
      if (!el) return;
      if (i === currentIdx) {
        tl.to(el, { xPercent: 0, opacity: 1, duration: 0.55, ease: SLIDE_EASE }, 0);
        if (isImage) {
          const inner = el.querySelector("[data-magnetic-inner]");
          if (inner) tl.to(inner, { scale: 1.08, duration: 0.55, ease: SLIDE_EASE }, 0);
        }
      } else {
        tl.to(el, { xPercent: 0, opacity: 0, duration: 0.4, ease: "power2.in" }, 0);
      }
    };

    textRefs.current.forEach((el, i) => snapPanel(el, i, false));
    imageRefs.current.forEach((el, i) => snapPanel(el, i, true));
  }, [setVisibleSlide]);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const queueNextSlide = useCallback(() => {
    clearAutoplay();
    autoplayRef.current = setTimeout(() => {
      const next = (indexRef.current + 1) % SLIDE_COUNT;
      goToSlideRef.current?.(next);
    }, SLIDE_HOLD_MS);
  }, [clearAutoplay]);

  const goToSlide = useCallback(
    (nextIndex, { fromDrag = false } = {}) => {
      if (isAnimatingRef.current) return;
      if (nextIndex === indexRef.current) return;

      const currentIdx = indexRef.current;
      const duration = fromDrag ? DRAG_COMPLETE_DURATION : TRANSITION_DURATION;
      const direction = getSlideDirection(currentIdx, nextIndex);
      const exitX = -100 * direction;
      const enterX = 100 * direction;

      const currentText = textRefs.current[currentIdx];
      const nextText = textRefs.current[nextIndex];
      const currentImg = imageRefs.current[currentIdx];
      const nextImg = imageRefs.current[nextIndex];

      isAnimatingRef.current = true;
      isDraggingRef.current = false;
      timelineRef.current?.kill();

      hideInactiveSlides(textRefs.current, currentIdx, nextIndex);
      hideInactiveSlides(imageRefs.current, currentIdx, nextIndex);

      resetMagneticTransforms(currentImg);
      resetMagneticTransforms(nextImg);

      const outgoing = [currentText, currentImg].filter(Boolean);
      const incoming = [nextText, nextImg].filter(Boolean);

      outgoing.forEach((el) => gsap.set(el, { zIndex: 1 }));
      incoming.forEach((el) => gsap.set(el, { zIndex: 2 }));

      if (!fromDrag) {
        outgoing.forEach((el) => gsap.set(el, { opacity: 1, xPercent: 0 }));
        incoming.forEach((el) => gsap.set(el, { opacity: 1, xPercent: enterX }));
        resetImageInner(currentImg);
        const nextInner = nextImg?.querySelector("[data-magnetic-inner]");
        if (nextInner) gsap.set(nextInner, { x: 0, y: 0, scale: 1.08 });
      } else {
        incoming.forEach((el) => gsap.set(el, { opacity: 1 }));
      }

      const tl = gsap.timeline({
        onComplete: () => {
          indexRef.current = nextIndex;
          setVisibleSlide(nextIndex);
          isAnimatingRef.current = false;
          queueNextSlide();
        },
      });

      timelineRef.current = tl;

      if (outgoing.length) {
        tl.to(outgoing, { xPercent: exitX, duration, ease: SLIDE_EASE }, 0);
      }
      if (incoming.length) {
        tl.to(incoming, { xPercent: 0, duration, ease: SLIDE_EASE }, 0);
      }
    },
    [queueNextSlide, setVisibleSlide]
  );

  useEffect(() => {
    goToSlideRef.current = goToSlide;
  }, [goToSlide]);

  useEffect(() => {
    setVisibleSlide(0);
    queueNextSlide();

    return () => {
      clearAutoplay();
      timelineRef.current?.kill();
    };
  }, [clearAutoplay, queueNextSlide, setVisibleSlide]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const column = imageColumnRef.current;
    if (!column) return;

    const onMove = (e) => {
      if (isAnimatingRef.current) return;

      const panel = imageRefs.current[indexRef.current];
      if (!panel) return;

      const inner = panel.querySelector("[data-magnetic-inner]");
      if (!inner) return;

      const rect = column.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(inner, {
        x: relX * IMAGE_MAGNET_STRENGTH,
        y: relY * IMAGE_MAGNET_STRENGTH,
        duration: 0.85,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      imageRefs.current.forEach((panel) => {
        if (!panel) return;
        const inner = panel.querySelector("[data-magnetic-inner]");
        if (!inner) return;
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: 1.1,
          ease: "elastic.out(1, 0.65)",
          overwrite: "auto",
        });
      });
    };

    column.addEventListener("mousemove", onMove);
    column.addEventListener("mouseleave", onLeave);

    return () => {
      column.removeEventListener("mousemove", onMove);
      column.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const getDragProgress = (deltaX) => {
    const width = sectionRef.current?.offsetWidth ?? window.innerWidth;
    return gsap.utils.clamp(-1, 1, -deltaX / (width * 0.6));
  };

  const handleTouchStart = (e) => {
    if (isAnimatingRef.current) return;
    touchStartXRef.current = e.touches[0].clientX;
    isDraggingRef.current = false;
    clearAutoplay();
  };

  const handleTouchMove = (e) => {
    if (isAnimatingRef.current) return;
    const deltaX = e.touches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 8) isDraggingRef.current = true;
    applyDragProgress(getDragProgress(deltaX));
  };

  const handleTouchEnd = (e) => {
    if (isAnimatingRef.current) return;

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const progress = getDragProgress(deltaX);

    if (!isDraggingRef.current || Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
      if (isDraggingRef.current) snapBackToCurrent();
      else queueNextSlide();
      isDraggingRef.current = false;
      return;
    }

    isDraggingRef.current = false;

    if (progress <= -DRAG_COMMIT_RATIO) {
      goToSlide((indexRef.current + 1) % SLIDE_COUNT, { fromDrag: true });
    } else if (progress >= DRAG_COMMIT_RATIO) {
      goToSlide((indexRef.current - 1 + SLIDE_COUNT) % SLIDE_COUNT, { fromDrag: true });
    } else {
      snapBackToCurrent();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full touch-pan-y select-none overflow-hidden text-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex min-h-[100svh] flex-col lg:grid lg:min-h-screen lg:grid-cols-2 lg:items-stretch">
        <div className="relative flex min-h-[48svh] flex-1 flex-col bg-[#141111] sm:min-h-[46svh] md:min-h-[44svh] lg:h-full lg:min-h-0">
          <div className="relative min-h-0 flex-1 overflow-hidden lg:h-full">
            {serviceSlides.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className="absolute inset-0 flex flex-col justify-center px-5 py-10 will-change-transform min-[380px]:px-6 sm:px-10 sm:py-14 md:px-14 md:py-18 lg:px-16 lg:py-24 xl:px-20 xl:py-28"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <div className="w-full max-w-2xl lg:max-w-xl">
                  <h2 className="max-w-full text-balance font-serif text-[clamp(2.25rem,13vw,3.75rem)] font-normal italic leading-[1.04] sm:text-[clamp(3.25rem,7vw,5rem)] lg:text-[clamp(3.5rem,4.8vw,5.5rem)]">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-[34rem] text-pretty font-serif text-base font-normal italic leading-relaxed text-zinc-100 min-[380px]:text-lg sm:mt-6 sm:text-xl md:mt-8 md:text-2xl lg:text-[clamp(1.35rem,2vw,1.875rem)]">
                    {item.quote}
                  </p>
                  <ContactButton href="/contact">Contact us</ContactButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={imageColumnRef}
          className="relative min-h-[52svh] flex-1 overflow-hidden sm:min-h-[54svh] md:min-h-[56svh] lg:h-full lg:min-h-0"
        >
          {serviceSlides.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              className="absolute inset-0 overflow-hidden will-change-transform"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <div
                data-magnetic-inner
                className="absolute inset-0 scale-[1.03] will-change-transform sm:scale-[1.06] lg:scale-[1.08]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative mt-6 inline-flex w-fit overflow-hidden bg-white px-6 py-3 font-serif text-base font-normal italic text-black min-[380px]:px-7 min-[380px]:py-3.5 sm:mt-8 sm:px-8 sm:py-4 sm:text-lg md:text-xl lg:mt-12"
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-zinc-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}
