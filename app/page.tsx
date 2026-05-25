import Link from "next/link";

const features = [
  {
    title: "Match score",
    description:
      "See an approximate fit percentage between your CV and each job description before you spend time applying.",
    icon: (
      <svg
        aria-hidden
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Tailored CVs",
    description:
      "Generate a role-specific version of your resume with AI, then compare the new match score side by side.",
    icon: (
      <svg
        aria-hidden
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    title: "Application tracker",
    description:
      "Mark roles as applied and revisit them later — always knowing exactly which CV version you sent.",
    icon: (
      <svg
        aria-hidden
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        />
      </svg>
    ),
  },
];

const steps = [
  "Upload your CV and set the role and region you are targeting.",
  "Paste a job URL or add listings you found — no scraping headaches to start.",
  "Review match scores and generate a tailored CV for roles worth pursuing.",
  "Apply, mark the role, and track follow-ups with the CV you used.",
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm text-white">
              RT
            </span>
            RoleTailor
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How it works
            </a>
          </nav>
          <Link
            href="#get-started"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-accent-soft),transparent)]"
          />
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Built for students and early-career developers
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
              Apply smarter — know your fit before you send your CV
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              RoleTailor helps you compare your resume to real job descriptions,
              improve your match with AI-tailored versions, and keep every
              application organized in one place.
            </p>
            <div
              id="get-started"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                See how it works
              </Link>
              <p className="text-sm text-muted">
                Sign-in and uploads coming in the next step.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-border bg-surface px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Everything you need in one workflow
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Start simple: paste job links you already found. Expand to search
              and filters when you are ready.
            </p>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <span className="inline-flex rounded-lg bg-accent-soft p-2 text-accent">
                    {feature.icon}
                  </span>
                  <h3 className="mt-4 font-medium">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-2">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} RoleTailor</span>
          <span>A portfolio project — feedback welcome.</span>
        </div>
      </footer>
    </div>
  );
}
