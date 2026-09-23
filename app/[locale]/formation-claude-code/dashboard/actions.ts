"use server";

import { redirect } from "next/navigation";
import {
  clearCourseDashboardSession,
  establishCourseDashboardSession,
} from "@/lib/course-dashboard-auth";

const DASHBOARD_PATH = "/fr/formation-claude-code/dashboard";

export async function signInCourseDashboard(formData: FormData) {
  const token = String(formData.get("token") ?? "");
  const authenticated = await establishCourseDashboardSession(token);

  if (!authenticated) {
    redirect(`${DASHBOARD_PATH}?error=1`);
  }

  redirect(DASHBOARD_PATH);
}

export async function signOutCourseDashboard() {
  await clearCourseDashboardSession();
  redirect(DASHBOARD_PATH);
}
