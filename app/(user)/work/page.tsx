import { SingleWorkSection } from "@/sections/work/SingleWorkSection";
import { SectionSeparator } from "@/components/separators/Separators";
import { BrandingIcon } from "@/public/assets/icons";

export default function Work() {
  return (
    <main className="work-page">
      <div className="hero">
        <h1>
          Our branding <br /> success stories.
        </h1>

        <BrandingIcon />
      </div>

      {/* SEPARATOR */}
      <SectionSeparator />

      <div className="projects-container">
        <SingleWorkSection />

        {/* SEPARATOR */}
        <SectionSeparator />

        <SingleWorkSection />

        {/* SEPARATOR */}
        <SectionSeparator />
      </div>
    </main>
  );
}
