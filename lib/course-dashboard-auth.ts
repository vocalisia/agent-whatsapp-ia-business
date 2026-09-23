import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "course_dashboard_session";
const SESSION_MARKER = "agenticwhatsup-course-dashboard-v1";
const DASHBOARD_PATH = "/fr/formation-claude-code/dashboard";

function configuredToken() {
  const token = process.env.COURSE_DASHBOARD_TOKEN?.trim();
  return token && token.length >= 24 ? token : null;
}

function sessionValue(token: string) {
  return createHmac("sha256", token).update(SESSION_MARKER).digest("hex");
}

function matches(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function isCourseDashboardConfigured() {
  return configuredToken() !== null;
}

export async function isCourseDashboardAuthenticated() {
  const token = configuredToken();
  if (!token) return false;

  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME)?.value;
  return Boolean(session && matches(session, sessionValue(token)));
}

export async function establishCourseDashboardSession(candidate: string) {
  const token = configuredToken();
  if (!token || !matches(candidate, token)) return false;

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, sessionValue(token), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 8,
    path: "/fr/formation-claude-code/dashboard",
  });
  return true;
}

export async function clearCourseDashboardSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: DASHBOARD_PATH,
  });
}
