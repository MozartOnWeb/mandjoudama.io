import { OnPageLink } from "@/components/buttons/OnPageLink";
import { SectionSeparator } from "@/components/separators/Separators";

import { SingleService } from "@/sections/services/SingleService";
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";

import { WebDevIcon, DesignIcon } from "@/public/assets/icons";

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
        <SingleService
          serviceName="Web Dev"
          serviceIcon={<WebDevIcon />}
          serviceCategories={[
            "Web Dev",
            "Seo Optimization",
            "Responsive Design",
          ]}
          serviceHeadline="Boost your online presence with our cutting-edge web development solutions. I create custom websites that are responsive, user-friendly, and optimized for search engines."
          id="web-dev"
        />
        {/* SEPARATOR */}
        <SectionSeparator />

        <SingleService
          serviceName="Web Design"
          serviceIcon={<DesignIcon />}
          serviceCategories={[
            "Web Design",
            "Seo Optimization",
            "Responsive Design",
          ]}
          serviceHeadline="Enhance your online presence with our innovative UI design solutions. I specialize in creating custom website designs that are visually stunning, intuitive to use, and optimized for user engagement."
          id="design"
        />
      </div>

      {/* SEPARATOR */}
      <SectionSeparator />

      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
