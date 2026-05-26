"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PasswordInput } from "@/components/auth/password-input";
import { InternalLink } from "@/components/ui/internal-link";
import { setRegisteredUser } from "@/lib/auth-session";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10";

const passwordInputClassName =
  "w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10";

export function SignupForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string).trim();
    const lastName = (formData.get("lastName") as string).trim();
    const email = (formData.get("email") as string).trim();

    setRegisteredUser({ firstName, lastName, email, password });
    router.push("/");
  };

  return (
    <>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-forest"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jane"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-forest"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Doe"
            className={inputClassName}
          />
        </div>
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
            autoComplete="new-password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordInputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-forest"
          >
            Confirm Password
          </label>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            required
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-invalid={showMismatch}
            aria-describedby={showMismatch ? "confirm-password-error" : undefined}
            className={`${passwordInputClassName} ${
              showMismatch
                ? "border-[var(--status-rejected-text)]/40 focus:border-[var(--status-rejected-text)]/50 focus:ring-[var(--status-rejected)]/30"
                : ""
            }`}
          />
          {showMismatch && (
            <p
              id="confirm-password-error"
              className="mt-1.5 text-sm text-[var(--status-rejected-text)]/90"
              role="alert"
            >
              Passwords do not match.
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={showMismatch}
          className="w-full cursor-pointer rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-muted hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Sign up
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-olive">
        Already have an account?{" "}
        <InternalLink
          href="/login"
          className="font-medium text-forest underline-offset-2 transition-colors duration-300 hover:underline"
        >
          Log in
        </InternalLink>
      </p>
    </>
  );
}
