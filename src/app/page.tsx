import { AboutSection } from "@/components/sections/about-section";
import { MapSection } from "@/components/sections/map-section";
import { ElaborateSection } from "@/components/sections/elaborate-section";

export default function Home() {
  return (
    <div className="portfolio">
      <main id="main">
        <AboutSection />
        <MapSection />
        <ElaborateSection />
      </main>
    </div>
  );
}
