import type { Metadata } from "next";
import { InternalLink } from "@/components/ui/internal-link";
import { SparkleIcon } from "@/components/landing/icons";

export const metadata: Metadata = {
  title: "Sign in — match.ai",
  description: "Sign in to your match.ai account.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <header className="border-b border-border-soft/60 px-6 py-5 lg:px-10">
        <InternalLink
          href="/"
          className="font-serif inline-flex items-center gap-1.5 text-xl tracking-tight text-forest transition-opacity duration-300 hover:opacity-80"
        >
          match.ai
          <SparkleIcon className="h-3.5 w-3.5 text-forest" />
        </InternalLink>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl border border-border-soft bg-cream-card p-8 shadow-[0_4px_24px_rgba(27,59,43,0.06)] sm:p-10">
          <h1 className="font-serif text-3xl text-forest">Welcome back</h1>
          <p className="mt-2 text-sm text-olive">
            Sign in to access your dashboard, applications, and tailored CVs.
          </p>

          <form className="mt-8 space-y-5" action="#" method="post">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-forest"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-forest"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-muted hover:shadow-md active:scale-[0.98]"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-olive">
            Don&apos;t have an account?{" "}
            <InternalLink
              href="/signup"
              className="font-medium text-forest underline-offset-2 transition-colors duration-300 hover:underline"
            >
              Sign up
            </InternalLink>
          </p>
        </div>
      </main>
    </div>
  );
}
