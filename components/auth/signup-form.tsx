"use client";

import { useState } from "react";
import { InternalLink } from "@/components/ui/internal-link";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-border-soft bg-cream px-4 py-2.5 text-sm text-forest outline-none transition-all duration-300 placeholder:text-olive-light focus:border-forest/40 focus:ring-2 focus:ring-forest/10";

export function SignupForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      e.preventDefault();
    }
  };

  return (
    <>
      <form
        className="mt-8 space-y-5"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
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
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-forest"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-invalid={showMismatch}
            aria-describedby={showMismatch ? "confirm-password-error" : undefined}
            className={`${inputClassName} ${
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
