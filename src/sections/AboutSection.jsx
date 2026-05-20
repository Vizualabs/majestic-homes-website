export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 md:grid-cols-2"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">End-to-end project delivery</h2>
      </div>
      <p className="text-zinc-300">
        From concept sketches and structural planning to BOQ and site execution, our team handles
        each phase with technical rigor and thoughtful design intent.
      </p>
    </section>
  );
}
