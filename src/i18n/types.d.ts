import type Common from "../../text/es/common.json";
import type About from "../../text/es/about.json";
import type Map from "../../text/es/map.json";
import type Proceso from "../../text/es/process.json";
import type Footer from "../../text/es/footer.json";
import type Metadata from "../../text/es/metadata.json";
import type NotFound from "../../text/es/not-found.json";
import type Ecosystems from "../../text/es/ecosystems.json";
import type { Locale } from "./config";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: { Common: typeof Common; About: typeof About; Map: typeof Map; Proceso: typeof Proceso; Footer: typeof Footer; Metadata: typeof Metadata; NotFound: typeof NotFound; Ecosystems: typeof Ecosystems };
  }
}
