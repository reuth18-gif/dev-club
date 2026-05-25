import type { Metadata } from "next";
import { CvUploadZone } from "@/components/cv-builder/cv-upload-zone";
import { InternalLink } from "@/components/ui/internal-link";
import { SavedJobsPicker } from "@/components/cv-builder/saved-jobs-picker";
import { SparkleIcon } from "@/components/landing/icons";

export const metadata: Metadata = {
  title: "CV Builder — match.ai",
  description: "Tailor your CV for saved jobs with AI-powered optimization.",
};

export default function CvBuilderPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <header className="border-b border-border-soft/60 px-6 py-5 lg:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <InternalLink
            href="/"
            className="font-serif inline-flex items-center gap-1.5 text-xl tracking-tight text-forest transition-opacity duration-300 hover:opacity-80"
          >
            match.ai
            <SparkleIcon className="h-3.5 w-3.5 text-forest" />
          </InternalLink>
          <InternalLink
            href="/"
            className="text-sm font-medium text-olive transition-colors duration-300 hover:text-forest"
          >
            ← Back to Home
          </InternalLink>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 lg:px-10 lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-light">
          AI powered CV builder
        </p>
        <h1 className="font-serif mt-2 text-3xl text-forest sm:text-4xl">
          Build your tailored CV
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-olive">
          Choose a saved job and upload your current resume. We&apos;ll help you
          tailor it for a stronger match.
        </p>

        <section className="mt-10 rounded-3xl border border-border-soft bg-cream-card p-6 shadow-[0_4px_24px_rgba(27,59,43,0.06)] sm:p-8">
          <h2 className="text-lg font-semibold text-forest">
            Select a saved job
          </h2>
          <p className="mt-1 text-sm text-olive">
            Pick the role you want to tailor your CV for.
          </p>
          <div className="mt-6">
            <SavedJobsPicker />
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-border-soft bg-cream-card p-6 shadow-[0_4px_24px_rgba(27,59,43,0.06)] sm:p-8">
          <h2 className="text-lg font-semibold text-forest">Upload your CV</h2>
          <p className="mt-1 text-sm text-olive">
            Upload your current resume to get started.
          </p>
          <div className="mt-6">
            <CvUploadZone />
          </div>
        </section>

        <div className="mt-10 flex justify-end">
          <button
            type="button"
            className="cursor-pointer rounded-full bg-forest px-8 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-muted hover:shadow-md active:scale-[0.98]"
          >
            Continue to tailor →
          </button>
        </div>
      </main>
    </div>
  );
}
