import Image from "next/image";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-white text-zinc-900">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="max-w-xl">
          <h2 className="font-serif text-5xl italic leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">Our</span>
            <span className="block">Philosophy</span>
          </h2>
          <p className="mt-6 font-serif text-base italic leading-relaxed text-zinc-700 sm:text-lg md:text-2xl">
            We believe that the spaces people inhabit shape who they become. A well-designed room
            can inspire clarity. A thoughtful corridor can invite calm.
          </p>
        </div>

        <div className="relative mt-16 h-[520px] w-full md:mt-24 md:h-[720px] lg:h-[820px]">
          <div className="absolute left-0 top-0 h-[62%] w-[52%] overflow-hidden shadow-xl">
            <Image
              src="/assets/Home1.jpg"
              alt="Majestic Homes project one"
              fill
              sizes="(max-width: 768px) 52vw, 780px"
              className="object-cover"
            />
          </div>

          <div className="absolute left-[26%] top-[20%] h-[68%] w-[54%] overflow-hidden shadow-2xl">
            <Image
              src="/assets/Home2.jpg"
              alt="Majestic Homes project two"
              fill
              sizes="(max-width: 768px) 54vw, 810px"
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-[38%] h-[65%] w-[58%] overflow-hidden shadow-2xl">
            <Image
              src="/assets/Home3.jpg"
              alt="Majestic Homes project three"
              fill
              sizes="(max-width: 768px) 58vw, 870px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid items-end gap-12 md:mt-24 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-5xl italic leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              <span className="block">Where Vision</span>
              <span className="block">Becomes Space</span>
            </h3>
            <Link
              href="/#projects"
              className="mt-8 inline-block font-serif text-xl italic text-zinc-900 underline-offset-4 hover:underline md:text-2xl"
            >
              Explore more
            </Link>
          </div>

          <div className="flex items-end justify-start gap-12 md:justify-end">
            <Stat number="05+" label="Ongoing" />
            <Stat number="20+" label="Completed" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-serif text-7xl italic leading-none md:text-8xl">{number}</p>
      <p className="mt-3 font-serif text-xl italic text-zinc-700 md:text-3xl">{label}</p>
    </div>
  );
}