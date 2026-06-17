import Image from "next/image";

const statements = [
  {
    title: "Vision",
    subtitle: "A World Designed with Care",
    body: "A world where thoughtful architecture is not a privilege of the few - where every building is designed with the same rigour and human sensitivity that the finest spaces in the world receive.",
  },
  {
    title: "Mission",
    subtitle: "We Design for the People Inside",
    body: "To create architecture that elevates the human experience - through disciplined design, material integrity, and an unwavering commitment to the vision of every client we serve. Not for awards. For the lives lived within our work.",
  },
];

export default function AboutVisionMission() {
  return (
    <>
      <section className="w-full bg-white text-zinc-950">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-20 lg:py-24">
          <div>
            <p className="font-serif text-2xl italic leading-tight sm:text-3xl">
              What We Believe
            </p>
            <h2 className="mt-6 max-w-none font-serif text-[clamp(3rem,6.6vw,6.5rem)] font-normal italic leading-[1.08] tracking-wide">
              <span className="block md:whitespace-nowrap">Architecture is Not a Service.</span>
              <span className="block">It is a Responsibility.</span>
            </h2>
          </div>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.85fr)] lg:gap-20">
            <div className="max-w-2xl font-serif text-xl italic leading-[1.35] sm:text-2xl lg:max-w-xl">
              <p>
                Welcome to Majestic Homes, where exceptional residential spaces are built on
                precision and trust. Our commitment to quality is driven by Mahesh Perera, a
                highly accomplished Quantity Surveyor with over 21 years of international
                experience across Sri Lanka and the UAE.
              </p>
              <p className="mt-8">
                Holding a BSc (Hons) from Sheffield Hallam University, Mahesh has managed pre and
                post-contract services for diverse sectors, including residential, mixed-use, and
                healthcare. Having contributed his expertise to renowned global organizations like
                CBRE and Aurecon, he specializes in civil and architectural works, ensuring
                meticulous cost control, accurate estimating, and seamless project execution.
              </p>
              <p className="mt-8">
                At Majestic Homes, we leverage this deep commercial and contractual expertise to
                deliver superior craftsmanship, absolute transparency, and maximum value for your
                vision.
              </p>

              <a
                href="/assets/QS-Mahesh%20Perera-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex bg-zinc-950 px-8 py-4 text-2xl italic leading-none text-white transition hover:bg-zinc-800"
              >
                Download Cv
              </a>
            </div>

            <div className="w-full bg-[#141111] p-4 sm:p-6 lg:mt-0">
              <div className="relative aspect-[4/5.55] w-full overflow-hidden bg-black">
                <Image
                  src="/assets/dp.jpg"
                  alt="Mahesh Perera"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-white/70 bg-[#141111] text-white md:min-h-screen">
        <div className="mx-auto grid min-h-full w-full max-w-[1500px] gap-16 px-5 py-16 sm:px-6 sm:py-20 md:min-h-screen md:grid-cols-2 md:items-center md:gap-20 md:px-12 md:py-16 lg:px-20">
          {statements.map((item) => (
            <article key={item.title} className="max-w-xl">
              <h2 className="font-serif text-[clamp(4rem,15vw,6rem)] font-normal italic leading-none tracking-wide md:text-[clamp(4.75rem,7vw,6.75rem)]">
                {item.title}
              </h2>
              <p className="mt-4 font-serif text-2xl italic leading-tight text-zinc-100 sm:text-3xl md:text-[clamp(1.65rem,2.2vw,2rem)]">
                {item.subtitle}
              </p>
              <p className="mt-12 font-serif text-2xl italic leading-[1.28] text-zinc-100 sm:text-3xl md:mt-14 md:text-[clamp(1.65rem,2.2vw,2rem)] lg:max-w-lg">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
