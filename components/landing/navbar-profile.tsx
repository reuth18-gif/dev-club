"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { InternalLink } from "@/components/ui/internal-link";
import {
  endSession,
  getActiveSessionUser,
  getFullName,
  getInitials,
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
    setUser(getActiveSessionUser());
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
    endSession();
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
  const showMenu = menuOpen;

  return (
    <div ref={menuRef} className="group relative">
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={showMenu}
        aria-haspopup="true"
        aria-label={`Profile menu for ${fullName}`}
        className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-forest/20 bg-gradient-to-br from-[#e8f0e6] to-cream-card text-sm font-semibold text-forest shadow-sm ring-1 ring-white/80 transition-all duration-300 hover:scale-105 hover:border-forest/40 hover:shadow-md"
      >
        {initials}
      </button>

      <div
        role="menu"
        className={`absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 rounded-2xl border border-border-soft bg-cream-card p-2 shadow-[0_8px_24px_rgba(27,59,43,0.12)] transition-all duration-300 ${
          showMenu
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0 md:group-hover:pointer-events-auto md:group-hover:visible md:group-hover:translate-y-0 md:group-hover:opacity-100"
        }`}
      >
        <div className="border-b border-border-soft px-3 py-3">
          <p className="font-serif text-base leading-snug text-forest">{fullName}</p>
          <p className="mt-0.5 truncate text-xs text-olive-light">{user.email}</p>
        </div>
        <button
          type="button"
          role="menuitem"
          onClick={handleLogout}
          className="mt-1 w-full cursor-pointer rounded-xl px-3 py-2.5 text-left text-sm font-medium text-olive transition-all duration-300 hover:bg-[#e8f0e6] hover:text-forest"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
