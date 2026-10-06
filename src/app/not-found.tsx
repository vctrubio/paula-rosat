import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrandMark } from "@/components/brand-mark";
import { JourneyNavigation } from "@/components/journey-navigation";
import styles from "./not-found.module.css";

export default async function NotFound() {
  const t = await getTranslations({ locale: "es", namespace: "NotFound" });

  return (
    <main id="main" className={styles.page} lang="es">
      <JourneyNavigation />
      <h1 className="sr-only">Paula Rosat</h1>
      <div className={styles.content}>
        <div className={styles.emblem} aria-hidden="true">
          <BrandMark className={styles.mark} />
        </div>
        <div className={styles.details}>
          <div>
            <p className={styles.intro}>{t("intro")}</p>
            <p className={styles.description}>{t("description")}</p>
          </div>
          <Link href="/" className={styles.return}>
            <span aria-hidden="true">←</span>{t("return")}
          </Link>
        </div>
      </div>
    </main>
  );
}
