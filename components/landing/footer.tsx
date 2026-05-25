import Link from "next/link";
import { footerLinks } from "@/lib/matac-data";
import { InstagramIcon, LinkedInIcon, SparkleIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="font-serif inline-flex items-center gap-1.5 text-xl text-cream"
            >
              matac.ai
              <SparkleIcon className="h-3.5 w-3.5 text-cream/80" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              Your AI career assistant. Find. Apply. Succeed.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-all duration-300 hover:bg-cream/20"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-all duration-300 hover:bg-cream/20"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-10 text-xs text-cream/50">
              © {new Date().getFullYear()} matac.ai. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {(
              Object.entries(footerLinks) as [
                keyof typeof footerLinks,
                readonly string[],
              ][]
            ).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-cream">{title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
