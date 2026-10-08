import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, localeCookie } from "./config";

export default getRequestConfig(async () => {
  const savedLocale = (await cookies()).get(localeCookie)?.value;
  const locale = isLocale(savedLocale) ? savedLocale : defaultLocale;

  return {
    locale,
    messages: {
      Common: (await import(`../../text/${locale}/common.json`)).default,
      About: (await import(`../../text/${locale}/about.json`)).default,
      Map: (await import(`../../text/${locale}/map.json`)).default,
      Proceso: (await import(`../../text/${locale}/process.json`)).default,
      Footer: (await import(`../../text/${locale}/footer.json`)).default,
      Metadata: (await import(`../../text/${locale}/metadata.json`)).default,
      NotFound: (await import(`../../text/${locale}/not-found.json`)).default,
      Ecosystems: (await import(`../../text/${locale}/ecosystems.json`)).default,
    },
  };
});
