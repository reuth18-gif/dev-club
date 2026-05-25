export const AUTH_STORAGE_KEY = "matchai_user";

export type UserSession = {
  firstName: string;
  lastName: string;
  email: string;
};

export function getFullName(user: UserSession): string {
  return `${user.firstName} ${user.lastName}`.trim();
}

export function getInitials(user: UserSession): string {
  const first = user.firstName.trim().charAt(0);
  const last = user.lastName.trim().charAt(0);
  const initials = `${first}${last}`.toUpperCase();
  return initials || "U";
}

export function getSessionUser(): UserSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UserSession;
    if (!parsed.firstName || !parsed.email) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setSessionUser(user: UserSession): void {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("auth-change"));
}

export function clearSessionUser(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event("auth-change"));
}
