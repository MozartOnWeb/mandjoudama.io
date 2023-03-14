import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import { SectionSeparator } from "@/components/separators/Separators";

import { SingleService } from "@/sections/services/SingleService";
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";

export default function Services() {
  return (
    <main className="services">
      <section className="services-hero">
        <h1>
          We create your <br /> brand together.
        </h1>

        <div className="hero-tags-links">
          <AnimatedButton
            style="outline"
            letters={["w", "e", "b", "\u00a0", "d", "e", "v"]}
          />
          <AnimatedButton
            style="outline"
            letters={["d", "e", "s", "i", "g", "n"]}
          />
          <AnimatedButton
            style="outline"
            letters={["b", "r", "a", "n", "d", "i", "n", "g"]}
          />
          <AnimatedButton
            style="outline"
            letters={["c", "o", "n", "t", "e", "n", " t"]}
          />
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <div>
        <SingleService />
        {/* SEPARATOR */}
        <SectionSeparator />
        <SingleService />
      </div>

      {/* SEPARATOR */}
      <SectionSeparator />

      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
