import Link from "next/link";
import { navLinks } from "@/lib/matac-data";
import { BellIcon, SparkleIcon, SunIcon } from "./icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link
          href="/"
          className="font-serif flex shrink-0 items-center gap-1.5 text-xl tracking-tight text-forest"
        >
          matac.ai
          <SparkleIcon className="h-3.5 w-3.5 text-forest" />
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-olive md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="transition-colors duration-300 hover:text-forest"
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-olive transition-all duration-300 hover:bg-border-soft/80 hover:text-forest"
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-olive transition-all duration-300 hover:bg-border-soft/80 hover:text-forest"
            aria-label="Notifications"
          >
            <BellIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-muted"
            aria-label="Profile"
          >
            D
          </button>
        </div>
      </div>
    </header>
  );
}
