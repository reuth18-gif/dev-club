import { CtaButton } from "./cta-button";

function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl lg:ml-auto">
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 50%, #a8c4a0 0%, #7a9e72 35%, #4a6b45 70%, #2d4a3a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Briefcase */}
      <div className="absolute bottom-[18%] left-1/2 z-10 -translate-x-1/2">
        <svg
          viewBox="0 0 200 160"
          className="h-44 w-56 drop-shadow-2xl sm:h-52 sm:w-64"
          aria-hidden
        >
          <defs>
            <linearGradient id="caseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d6b4a" />
              <stop offset="50%" stopColor="#2a5238" />
              <stop offset="100%" stopColor="#1b3b2b" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af6a" />
              <stop offset="100%" stopColor="#a67c2e" />
            </linearGradient>
          </defs>
          <rect x="30" y="55" width="140" height="90" rx="12" fill="url(#caseGrad)" />
          <rect x="30" y="55" width="140" height="28" rx="8" fill="#1e3328" opacity="0.5" />
          <path
            d="M 70 55 Q 100 20 130 55"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <rect x="88" y="68" width="24" height="18" rx="3" fill="url(#goldGrad)" />
          <ellipse cx="100" cy="148" rx="70" ry="8" fill="#000" opacity="0.15" />
        </svg>
      </div>

      {/* Your CV card */}
      <div className="absolute left-4 top-8 z-20 w-36 rounded-2xl border border-white/30 bg-cream-card/95 p-3 shadow-lg backdrop-blur-sm sm:left-8 sm:w-40">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-olive-light">
          Your CV
        </p>
        <p className="mt-0.5 text-xs font-medium text-forest">AI optimized</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-hero-green" />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-full rounded-full bg-border-soft" />
            <div className="h-1.5 w-3/4 rounded-full bg-border-soft" />
          </div>
        </div>
      </div>

      {/* Job Match card */}
      <div className="absolute bottom-16 right-4 z-20 w-36 rounded-2xl border border-white/30 bg-cream-card/95 p-3 shadow-lg backdrop-blur-sm sm:right-8 sm:w-40">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-olive-light">
          Job Match
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="relative flex h-14 w-14 items-center justify-center">
            <svg className="absolute inset-0 h-14 w-14 -rotate-90" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#e8e6df"
                strokeWidth="4"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#1b3b2b"
                strokeWidth="4"
                strokeDasharray="150.8"
                strokeDashoffset="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm font-bold text-forest">98%</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-forest">Great Match!</p>
            <p className="text-[10px] text-olive-light">Senior Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-forest sm:text-5xl lg:text-[3.25rem]">
            Smarter job search.
            <br />
            Better matches.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-olive lg:text-lg">
            match.ai uses AI to match your CV to the right roles, tailor your
            resume for each application, and keep every opportunity organized in
            one dashboard.
          </p>
          <div className="mt-8">
            <CtaButton href="#jobs">Start Exploring Jobs &gt;</CtaButton>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
