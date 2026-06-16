"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services";
  const isProjects = pathname === "/projects";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerClass =
    isHome || isAbout || isServices || isProjects
      ? `absolute inset-x-0 top-0 ${isOpen ? "z-[70]" : "z-50"}`
      : `sticky top-0 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur ${isOpen ? "z-[70]" : "z-50"}`;

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className={headerClass}>
        <nav className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-3 sm:px-6 sm:py-4 md:px-12 lg:px-20">
          <Link href="/" className="flex items-center" aria-label="Majestic Homes home">
            <Image
              src={isHome ? "/assets/logo.png" : "/assets/loadingimg.png"}
              alt="Majestic Homes"
              width={180}
              height={36}
              priority
              style={{ height: "auto" }}
              className="w-28 sm:w-36 md:w-44"
            />
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10"
          >
            {isOpen ? (
              <>
                <span className="md:hidden">
                  <CloseIcon />
                </span>
                <span className="hidden md:inline-flex">
                  <MenuIcon />
                </span>
              </>
            ) : (
              <MenuIcon />
            )}
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
        className={`fixed right-0 top-0 z-[60] flex h-full w-full flex-col overflow-y-auto bg-zinc-950/55 backdrop-blur-md transition-transform duration-300 ease-out sm:w-[480px] md:w-[560px] lg:w-[620px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-center gap-y-7 px-6 pb-12 pt-20 sm:gap-y-10 sm:px-10 md:gap-y-14 md:px-14 md:pb-16 md:pt-24">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-center font-serif text-2xl italic text-white transition hover:text-zinc-300 sm:text-3xl md:text-4xl"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="inline-flex w-full items-center justify-center bg-white px-6 py-3 font-serif text-lg italic text-zinc-950 transition hover:bg-zinc-200 sm:py-4 sm:text-xl md:text-2xl"
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
