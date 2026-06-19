import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  id,
  title,
  category,
  cover,
  priority = false,
  className = "",
}) {
  return (
    <Link
      href={`/projects/${id}`}
      className={`group relative block aspect-[1.45/1] overflow-hidden bg-zinc-200 ${className}`}
      aria-label={`View ${title}`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "360px 248px" }}
    >
      <Image
        src={cover}
        alt={title}
        fill
        priority={priority}
        quality={54}
        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-serif text-sm italic text-zinc-200">{category}</p>
        <h3 className="mt-1 font-serif text-2xl italic leading-tight text-white md:text-3xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}
