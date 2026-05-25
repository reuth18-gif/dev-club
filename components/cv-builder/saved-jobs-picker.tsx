"use client";

import { useState } from "react";
import { savedJobsForCv } from "@/lib/matac-data";
import { CompanyLogo } from "@/components/landing/icons";

export function SavedJobsPicker() {
  const [selectedId, setSelectedId] = useState<string>(savedJobsForCv[0].id);

  return (
    <div className="space-y-4">
      <ul className="grid gap-3 sm:grid-cols-2">
        {savedJobsForCv.map((job) => {
          const isSelected = selectedId === job.id;
          return (
            <li key={job.id}>
              <button
                type="button"
                onClick={() => setSelectedId(job.id)}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-forest bg-forest/5 shadow-[0_4px_16px_rgba(27,59,43,0.08)] ring-2 ring-forest/20"
                    : "border-border-soft bg-cream hover:border-forest/25 hover:shadow-sm"
                }`}
                aria-pressed={isSelected}
              >
                <CompanyLogo bg={job.logoBg} label={job.logoLabel} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-forest">{job.role}</p>
                  <p className="text-sm text-olive-light">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-forest bg-forest"
                      : "border-border-soft bg-cream"
                  }`}
                  aria-hidden
                >
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-cream" />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <label htmlFor="saved-job-select" className="sr-only">
        Select a saved job
      </label>
      <select
        id="saved-job-select"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full cursor-pointer rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 focus:border-forest/40 focus:ring-2 focus:ring-forest/10 sm:hidden"
      >
        {savedJobsForCv.map((job) => (
          <option key={job.id} value={job.id}>
            {job.role} at {job.company}
          </option>
        ))}
      </select>
    </div>
  );
}
