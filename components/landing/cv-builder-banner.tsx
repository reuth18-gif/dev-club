import { CtaButton } from "./cta-button";

function CvPreview() {
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#a8c4a0]/40 via-[#c5d4c0]/30 to-transparent p-6 sm:min-h-[260px]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7a9e72 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative w-full max-w-[200px] rotate-[-4deg] rounded-xl border border-border-soft bg-white p-5 shadow-lg">
        <p className="font-serif text-sm font-medium text-forest">Your CV</p>
        <div className="mt-3 space-y-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-olive-light">
              Experience
            </p>
            <div className="mt-1.5 space-y-1">
              <div className="h-1.5 w-full rounded bg-border-soft" />
              <div className="h-1.5 w-4/5 rounded bg-border-soft" />
              <div className="h-1.5 w-3/5 rounded bg-border-soft" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-olive-light">
              Skills
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {["UX", "Figma", "Research"].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-hero-green/50 px-2 py-0.5 text-[9px] font-medium text-forest"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-olive-light">
              Education
            </p>
            <div className="mt-1.5 h-1.5 w-2/3 rounded bg-border-soft" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CvBuilderBanner() {
  return (
    <section className="px-6 py-8 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border-soft bg-gradient-to-r from-[#e8f0e6] via-cream-card to-cream-card shadow-[0_4px_24px_rgba(27,59,43,0.05)]">
        <div className="grid lg:grid-cols-2">
          <CvPreview />
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-light">
              AI powered CV builder
            </p>
            <h2 className="font-serif mt-3 text-3xl leading-tight text-forest sm:text-4xl">
              Tailored CVs.
              <br />
              Made for You.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-olive">
              Generate a role-specific version of your resume with AI — optimized
              keywords, stronger bullets, and a higher match score for every job
              you apply to.
            </p>
            <div className="mt-8">
              <CtaButton href="/cv-builder">Build My CV &gt;</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
