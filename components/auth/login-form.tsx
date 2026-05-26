"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PasswordInput } from "@/components/auth/password-input";
import { InternalLink } from "@/components/ui/internal-link";
import { setLoggedIn, validateLoginEmail } from "@/lib/auth-session";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10";

const passwordInputClassName =
  "w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string).trim();

    if (!validateLoginEmail(email)) {
      setError("Invalid email or password");
      return;
    }

    setLoggedIn();
    router.push("/");
  };

  return (
    <>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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
            required
            placeholder="you@example.com"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-forest"
          >
            Password
          </label>
          <PasswordInput
            id="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="••••••••"
            aria-invalid={!!error}
            aria-describedby={error ? "login-error" : undefined}
            className={`${passwordInputClassName} ${
              error
                ? "border-[var(--status-rejected-text)]/40 focus:border-[var(--status-rejected-text)]/50 focus:ring-[var(--status-rejected)]/30"
                : ""
            }`}
          />
          {error && (
            <p
              id="login-error"
              className="mt-1.5 text-sm text-[var(--status-rejected-text)]/90"
              role="alert"
            >
              {error}
            </p>
          )}
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
    </>
  );
}
