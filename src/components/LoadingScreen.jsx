"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("sliding"), 2600);
    const t2 = setTimeout(() => setPhase("done"), 3300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-zinc-950 transition-transform duration-700 ease-in-out ${
        phase === "sliding" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="load-logo flex flex-col items-center gap-10">
        <Image
          src="/assets/loadingimg.png"
          alt="Majestic Homes"
          width={220}
          height={44}
          priority
          style={{ height: "auto" }}
          className="w-40 md:w-56"
        />

        <div className="relative flex w-56 flex-col items-center gap-4 md:w-72">
          <div className="relative h-px w-full overflow-hidden bg-zinc-800">
            <div className="load-line absolute inset-0 bg-white" />
          </div>

          <p className="load-tagline text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Crafting your experience
          </p>
        </div>
      </div>
    </div>
  );
}
