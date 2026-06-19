"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const INITIAL_IMAGES = 4;
const IMAGE_BATCH = 4;

export default function ProjectGallery({ images, title }) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL_IMAGES, images.length)
  );
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || visibleCount >= images.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisibleCount((current) =>
          Math.min(current + IMAGE_BATCH, images.length)
        );
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [images.length, visibleCount]);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {visibleImages.map((image, index) => (
          <div
            key={image}
            className="relative aspect-[16/10] overflow-hidden bg-zinc-900 md:aspect-[4/3]"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "720px 540px",
            }}
          >
            <Image
              src={image}
              alt={`${title} image ${index + 1}`}
              fill
              priority={index === 0}
              quality={54}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {visibleCount < images.length ? (
        <div ref={sentinelRef} className="h-12 bg-[#141111]" aria-hidden="true" />
      ) : null}
    </>
  );
}
