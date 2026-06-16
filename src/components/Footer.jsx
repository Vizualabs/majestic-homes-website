import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
];

const discoverLinks = [
  { href: "/projects", label: "Ongoing" },
  { href: "/projects", label: "Completed" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-zinc-200">
      <div className="mx-auto w-full max-w-[1500px] px-5 pt-12 pb-6 sm:px-6 sm:pt-16 md:px-12 md:pt-20 lg:px-20">
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Link href="/" aria-label="Majestic Homes home" className="inline-flex">
              <Image
                src="/assets/loadingimg.png"
                alt="Majestic Homes"
                width={220}
                height={48}
                style={{ height: "auto" }}
                className="w-36 sm:w-44 md:w-52"
              />
            </Link>

            <p className="mt-8 font-serif text-3xl italic leading-tight text-white sm:mt-10 sm:text-4xl md:text-5xl">
              Mastered the art of
              <br />
              construction
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:justify-items-end">
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn title="Discover" links={discoverLinks} />
            <FooterSocialColumn title="Follow Us" links={socialLinks} />
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-700/70 pt-6 sm:mt-16 md:mt-20">
          <p className="flex flex-col items-center justify-center gap-2 text-center text-xs text-zinc-300 sm:flex-row sm:gap-8 sm:text-sm">
            <span>All rights reserved Majestic homes</span>
            <span>
              Design and developed by{" "}
              <a
                href="https://vizualabs.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                vizualabs
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
      <ul className="mt-6 space-y-3 text-sm text-zinc-300">
        {links.map((item) => (
          <li key={`${title}-${item.label}`}>
            <Link
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterSocialColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
      <ul className="mt-6 flex items-center gap-4 text-zinc-300">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 text-zinc-300 transition hover:border-white hover:text-white"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.55l.38-3H13.5V8.6c0-.87.24-1.46 1.49-1.46h1.59V4.46A21 21 0 0 0 14.27 4.3c-2.3 0-3.88 1.41-3.88 4v2.2H7.83v3h2.56V21z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.83v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.66c0-1.35-.03-3.08-1.97-3.08-1.97 0-2.27 1.46-2.27 2.97V21h-4z" />
    </svg>
  );
}
