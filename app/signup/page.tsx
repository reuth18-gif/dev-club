import type { Metadata } from "next";
import { SignupForm } from "@/components/auth/signup-form";
import { InternalLink } from "@/components/ui/internal-link";
import { SparkleIcon } from "@/components/landing/icons";

export const metadata: Metadata = {
  title: "Sign up — match.ai",
  description: "Create your match.ai account.",
};

export default function SignupPage() {
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

      <main className="flex flex-1 items-center justify-center px-6 py-12 sm:py-16">
        <div className="w-full max-w-md rounded-3xl border border-border-soft bg-cream-card p-8 shadow-[0_4px_24px_rgba(27,59,43,0.06)] sm:p-10">
          <h1 className="font-serif text-3xl text-forest">Create your account</h1>
          <p className="mt-2 text-sm text-olive">
            Join match.ai to tailor your CV, track applications, and land your
            next role.
          </p>
          <SignupForm />
        </div>
      </main>
    </div>
  );
}
