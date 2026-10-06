"use server";

import { cookies } from "next/headers";
import { isLocale, localeCookie } from "./config";

export async function changeLocale(formData: FormData) {
  const locale = formData.get("locale");
  if (!isLocale(locale)) return;

  // Next.js re-renders the current page and layout after this cookie changes.
  (await cookies()).set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
