const services = [
  "House Planning",
  "Structural Design",
  "Construction Management",
  "Bill of Quantities (BOQ)",
  "3D Visualization",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Services</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Integrated design and construction</h1>
      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {services.map((service) => (
          <li key={service} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-zinc-200">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
