"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerClass = isHome
    ? "absolute inset-x-0 top-0 z-50"
    : "sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur";

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={headerClass}>
        <nav className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <Link href="/" className="flex items-center" aria-label="Majestic Homes home">
            <Image
              src="/assets/logo.png"
              alt="Majestic Homes"
              width={180}
              height={36}
              priority
              style={{ height: "auto" }}
              className="w-36 md:w-44"
            />
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 ${isOpen ? "invisible" : "visible"}`}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-40 flex h-full w-full flex-col bg-zinc-950/55 backdrop-blur-md transition-transform duration-300 ease-out sm:w-[560px] md:w-[620px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10 md:hidden"
        >
          <CloseIcon />
        </button>

        <nav className="flex flex-1 flex-col justify-center gap-y-10 px-10 pb-14 pt-20 md:gap-y-26 md:px-14 md:pb-16 md:pt-24">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-center font-serif text-3xl italic text-white transition hover:text-zinc-300 md:text-4xl"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="inline-flex w-full items-center justify-center bg-white px-6 py-4 font-serif text-xl italic text-zinc-950 transition hover:bg-zinc-200 md:text-2xl"
          >
            Contact us
          </Link>
        </nav>
      </aside>
    </>
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
