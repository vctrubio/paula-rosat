import { Analytics } from "@vercel/analytics/next";
import { seoConfig } from "@/config/seo";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    metadataBase: new URL(seoConfig.url),
    title: seoConfig.title,
    icons: seoConfig.icons,
    description: t("description"),
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [locale, t, messages] = await Promise.all([getLocale(), getTranslations("Common"), getMessages()]);
  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="fixed top-4 left-4 z-50 -translate-y-24 bg-olive px-5 py-3 text-paper focus:translate-y-0">{t("skip")}</a>
        <NextIntlClientProvider messages={{ Common: messages.Common, Metadata: messages.Metadata }}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
