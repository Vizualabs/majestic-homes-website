import Button from "@/components/Button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:flex md:items-center md:justify-between"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Contact</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Start your next build with us</h2>
      </div>
      <div className="mt-5 md:mt-0">
        <Button href="mailto:hello@majestichomes.com">hello@majestichomes.com</Button>
      </div>
    </section>
  );
}
