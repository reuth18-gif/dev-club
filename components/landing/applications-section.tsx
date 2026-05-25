import Link from "next/link";
import { applications } from "@/lib/matac-data";
import { StatusBadge } from "@/components/ui/status-badge";
import { CtaButton } from "./cta-button";
import { ChevronRightIcon, CompanyLogo } from "./icons";

export function ApplicationsSection() {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pr-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-light">
            All in one place
          </p>
          <h2 className="font-serif mt-3 text-3xl leading-tight text-forest sm:text-4xl">
            Track. Manage.
            <br />
            Get Hired.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-olive">
            See every application at a glance — status, company, and role — so you
            never lose track of where you stand in your job search.
          </p>
          <div className="mt-8">
            <CtaButton href="#dashboard">Go to Dashboard &gt;</CtaButton>
          </div>
        </div>

        <div className="rounded-3xl border border-border-soft bg-cream-card p-6 shadow-[0_4px_24px_rgba(27,59,43,0.06)] sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-forest">Your Applications</h3>
            <Link
              href="#applications"
              className="text-sm font-medium text-olive transition-colors duration-300 hover:text-forest"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-border-soft">
            {applications.map((app) => (
              <li key={app.company}>
                <Link
                  href="#applications"
                  className="group flex items-center gap-4 py-4 transition-all duration-300 first:pt-0 last:pb-0 hover:opacity-90"
                >
                  <CompanyLogo bg={app.logoBg} label={app.logoLabel} size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-forest">{app.role}</p>
                    <p className="text-sm text-olive-light">{app.company}</p>
                  </div>
                  <StatusBadge status={app.status} />
                  <ChevronRightIcon className="h-5 w-5 shrink-0 text-olive-light transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-forest" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
