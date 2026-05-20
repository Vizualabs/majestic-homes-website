export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 sm:gap-6 sm:rounded-3xl sm:p-8 md:grid-cols-2"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">About</p>
        <h2 className="mt-2 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">
          End-to-end project delivery
        </h2>
      </div>
      <p className="text-sm text-zinc-300 sm:text-base">
        From concept sketches and structural planning to BOQ and site execution, our team handles
        each phase with technical rigor and thoughtful design intent.
      </p>
    </section>
  );
}
