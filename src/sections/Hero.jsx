import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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

        <div className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10 md:pb-20">
          <div className="grid items-end gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-4xl italic leading-[1.1] text-white sm:text-5xl md:text-6xl">
                <span className="block">Crafted.</span>
                <span className="block">Not Constructed.</span>
              </h1>
              <p className="mt-6 text-sm tracking-wide text-zinc-200 md:text-base">
                Architecture <span className="mx-1 text-zinc-400">·</span> Interiors
                <span className="mx-1 text-zinc-400">·</span> Landscape
              </p>
            </div>

            <div className="flex flex-col items-start gap-8 md:items-end">
              <div className="flex flex-col gap-7">
                <div className="flex items-end gap-12">
                  <Stat number="05+" label="ongoing" />
                  <Stat number="20+" label="Completed" />
                </div>
                <Link
                  href="/#projects"
                  className="inline-flex w-full items-center justify-center border border-white/60 px-10 py-4 text-base tracking-wide text-white transition hover:bg-white hover:text-zinc-950"
                >
                  Explore projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-white">
      <p className="font-serif text-5xl italic leading-none md:text-6xl">{number}</p>
      <p className="mt-3 font-serif text-lg italic text-zinc-200 md:text-2xl">{label}</p>
    </div>
  );
}
