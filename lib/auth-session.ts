export const REGISTERED_USER_KEY = "registeredUser";
export const LOGGED_IN_KEY = "isLoggedIn";

export type RegisteredUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserSession = {
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginValidationResult = "success" | "wrong-password" | "not-registered";

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

export function getRegisteredUser(): RegisteredUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(REGISTERED_USER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as RegisteredUser;
    if (!parsed.firstName || !parsed.email || !parsed.password) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setRegisteredUser(user: RegisteredUser): void {
  localStorage.setItem(REGISTERED_USER_KEY, JSON.stringify(user));
  setLoggedIn();
}

export function getSessionUser(): UserSession | null {
  const registered = getRegisteredUser();
  if (!registered) return null;
  return {
    firstName: registered.firstName,
    lastName: registered.lastName,
    email: registered.email,
  };
}

/** Returns user data only when an active session exists. */
export function getActiveSessionUser(): UserSession | null {
  if (!isUserLoggedIn()) return null;
  return getSessionUser();
}

export function clearSessionUser(): void {
  localStorage.removeItem(REGISTERED_USER_KEY);
  localStorage.removeItem(LOGGED_IN_KEY);
  window.dispatchEvent(new Event("auth-change"));
}

export function validateLogin(
  email: string,
  password: string
): LoginValidationResult {
  const stored = getRegisteredUser();
  if (!stored) return "not-registered";

  const normalizedEmail = email.trim().toLowerCase();
  const storedEmail = stored.email.trim().toLowerCase();

  if (storedEmail !== normalizedEmail) return "not-registered";
  if (stored.password !== password) return "wrong-password";
  return "success";
}
