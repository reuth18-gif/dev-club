"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { InternalLink } from "@/components/ui/internal-link";
import {
  clearSessionUser,
  getFullName,
  getInitials,
  getSessionUser,
  type UserSession,
} from "@/lib/auth-session";
import { UserAvatarIcon } from "./icons";

export function NavbarProfile() {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<UserSession | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const syncUser = useCallback(() => {
    setUser(getSessionUser());
  }, []);

  useEffect(() => {
    syncUser();
    setMounted(true);
    window.addEventListener("auth-change", syncUser);
    window.addEventListener("storage", syncUser);
    return () => {
      window.removeEventListener("auth-change", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, [syncUser]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleLogout = () => {
    clearSessionUser();
    setUser(null);
    setMenuOpen(false);
    router.push("/");
  };

  if (!mounted) {
    return (
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border-soft bg-gradient-to-br from-[#e8f0e6] to-cream-card"
        aria-hidden
      />
    );
  }

  if (!user) {
    return (
      <InternalLink
        href="/login"
        aria-label="Sign in to your account"
        className="group flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-border-soft bg-gradient-to-br from-[#e8f0e6] to-cream-card shadow-sm ring-1 ring-white/80 transition-all duration-300 hover:scale-105 hover:border-forest/25 hover:opacity-90 hover:shadow-md"
      >
        <UserAvatarIcon className="h-5 w-5 text-forest/60 transition-colors duration-300 group-hover:text-forest" />
      </InternalLink>
    );
  }

  const fullName = getFullName(user);
  const initials = getInitials(user);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-haspopup="true"
        aria-label={`Profile menu for ${fullName}`}
        className="group flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-forest/20 bg-gradient-to-br from-[#e8f0e6] to-cream-card text-sm font-semibold text-forest shadow-sm ring-1 ring-white/80 transition-all duration-300 hover:scale-105 hover:border-forest/40 hover:shadow-md"
      >
        {initials}
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 w-56 origin-top-right rounded-2xl border border-border-soft bg-cream-card p-2 shadow-[0_8px_24px_rgba(27,59,43,0.12)] transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        } group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:block`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        <div className="border-b border-border-soft px-3 py-3">
          <p className="font-serif text-base text-forest">{fullName}</p>
          <p className="mt-0.5 truncate text-xs text-olive-light">{user.email}</p>
        </div>
        <button
          type="button"
          role="menuitem"
          onClick={handleLogout}
          className="mt-1 w-full cursor-pointer rounded-xl px-3 py-2.5 text-left text-sm font-medium text-olive transition-all duration-300 hover:bg-border-soft/80 hover:text-forest"
        >
          Log out
        </button>
      </div>

      {/* Hover bridge: show menu on hover for desktop */}
      <div className="absolute right-0 top-full hidden pt-2 md:block md:group-hover:block">
        <div
          className={`w-56 rounded-2xl border border-border-soft bg-cream-card p-2 shadow-[0_8px_24px_rgba(27,59,43,0.12)] transition-all duration-300 ${
            menuOpen ? "hidden" : "opacity-0 invisible group-hover:visible group-hover:opacity-100"
          }`}
        />
      </div>
    </div>
  );
}
