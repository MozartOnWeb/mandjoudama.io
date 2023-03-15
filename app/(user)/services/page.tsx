import { OnPageLink } from "@/components/buttons/OnPageLink";
import { SectionSeparator } from "@/components/separators/Separators";

import { SingleService } from "@/sections/services/SingleService";
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <h1>Let&apos;s bring your brand to the next level.</h1>

        <div className="hero-tags-links">
          <OnPageLink
            style="outline"
            letters={["w", "e", "b", "\u00a0", "d", "e", "v"]}
            href="#web-dev"
          />
          <OnPageLink
            style="outline"
            letters={["d", "e", "s", "i", "g", "n"]}
            href="#design"
          />
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <div>
        <SingleService id="web-dev" />
        {/* SEPARATOR */}
        <SectionSeparator />
        <SingleService id="design" />
      </div>

      {/* SEPARATOR */}
      <SectionSeparator />

      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
