const services = [
  "House Planning",
  "Structural Design",
  "Construction Management",
  "Bill of Quantities (BOQ)",
  "3D Visualization",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">Services</p>
      <h1 className="mt-3 font-serif text-4xl italic text-white md:text-6xl">
        Integrated design and construction
      </h1>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 font-serif text-lg italic text-zinc-200 md:text-xl"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
