"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const headerClass = isHome
    ? "absolute inset-x-0 top-0 z-50"
    : "sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur";

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center" aria-label="Majestic Homes home">
          <Image
            src="/assets/logo.png"
            alt="Majestic Homes"
            width={180}
            height={36}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-200 transition hover:bg-zinc-800/60 hover:text-white"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-zinc-950/90 backdrop-blur transition-[max-height] duration-300 ease-out ${
          isOpen ? "max-h-96 border-t border-zinc-800/40" : "max-h-0"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4 md:px-10">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm tracking-wide text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="4" y="6" width="16" height="2.25" rx="1" />
      <rect x="4" y="11" width="16" height="2.25" rx="1" />
      <rect x="4" y="16" width="16" height="2.25" rx="1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}
