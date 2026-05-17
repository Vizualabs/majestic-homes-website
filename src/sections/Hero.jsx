import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Architecture & Design</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
        Crafted with precision. Defined by vision.
      </h1>
      <p className="mt-5 max-w-2xl text-zinc-300">
        Majestic Homes designs luxury residences and delivers complete construction execution with
        modern methods and timeless aesthetics.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href="/services">Explore Services</Button>
        <Button href="#contact" variant="outline">
          Contact Studio
        </Button>
      </div>
    </section>
  );
}
