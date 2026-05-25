export const AUTH_STORAGE_KEY = "matchai_user";
export const LOGGED_IN_KEY = "isLoggedIn";

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

export function isUserLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(LOGGED_IN_KEY) === "true";
}

export function setLoggedIn(): void {
  localStorage.setItem(LOGGED_IN_KEY, "true");
  window.dispatchEvent(new Event("auth-change"));
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

/** Returns user data only when an active session exists. */
export function getActiveSessionUser(): UserSession | null {
  if (!isUserLoggedIn()) return null;
  return getSessionUser();
}

export function setSessionUser(user: UserSession): void {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  setLoggedIn();
}

/** Ends the active session but keeps stored user data for re-login. */
export function endSession(): void {
  localStorage.removeItem(LOGGED_IN_KEY);
  window.dispatchEvent(new Event("auth-change"));
}

export function clearSessionUser(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(LOGGED_IN_KEY);
  window.dispatchEvent(new Event("auth-change"));
}

export function validateLoginEmail(email: string): boolean {
  const stored = getSessionUser();
  if (!stored) return false;
  return stored.email.trim().toLowerCase() === email.trim().toLowerCase();
}
