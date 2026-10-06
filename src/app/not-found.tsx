import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <main id="main" className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="eyebrow text-rose">{t("label")}</p>
      <h1 className="font-display text-6xl">{t("title")}</h1>
      <Link href="/" className="border-b border-olive pb-1 text-sm">{t("return")}</Link>
    </main>
  );
}
