import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function DevPage() {
  // Server gate also blocks direct requests and Vercel production/preview builds.
  if (process.env.NODE_ENV !== "development") notFound();

  const { BrandNotebook } = await import("@/components/dev/brand-notebook");
  return <BrandNotebook />;
}
