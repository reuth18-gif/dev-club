"use client";

import { useState } from "react";
import {
  jobCategories,
  jobs,
  type JobCategory,
} from "@/lib/matac-data";
import { BookmarkIcon, CompanyLogo, FilterIcon } from "./icons";

export function JobFeed() {
  const [activeCategory, setActiveCategory] = useState<JobCategory>("All");

  const filtered =
    activeCategory === "All"
      ? jobs
      : jobs.filter((j) => j.category === activeCategory);

  return (
    <section id="jobs" className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-center text-3xl text-forest sm:text-4xl">
          Find jobs that match your interests
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {jobCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 ${
                activeCategory === cat
                  ? "bg-forest text-cream shadow-sm"
                  : "border border-border-soft bg-cream-card text-olive hover:border-forest/30 hover:text-forest"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            type="button"
            className="ml-1 inline-flex items-center gap-2 rounded-full border border-border-soft bg-cream-card px-4 py-2 text-sm font-medium text-olive transition-all duration-300 hover:border-forest/30 hover:text-forest"
          >
            <FilterIcon className="h-4 w-4" />
            Filter
          </button>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((job) => (
            <li key={job.id}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-border-soft bg-cream-card p-5 shadow-[0_2px_12px_rgba(27,59,43,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-[0_8px_24px_rgba(27,59,43,0.08)]">
                <button
                  type="button"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-olive-light transition-all duration-300 hover:bg-border-soft hover:text-forest"
                  aria-label={`Save ${job.title}`}
                >
                  <BookmarkIcon className="h-4 w-4" />
                </button>
                <CompanyLogo bg={job.logoBg} label={job.logoLabel} size="sm" />
                <h3 className="mt-4 pr-8 font-semibold leading-snug text-forest">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-olive-light">{job.company}</p>
                <p className="mt-auto pt-4 text-xs text-olive-light">
                  <span className="text-olive">•</span> {job.location}
                  <span className="mx-2 text-border-soft">|</span>
                  {job.posted}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
