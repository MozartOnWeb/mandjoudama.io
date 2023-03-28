import { SingleWorkSection } from "@/sections/work/SingleWorkSection";
import { SectionSeparator } from "@/components/separators/Separators";
import { BrandingIcon } from "@/public/assets/icons";
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";

export const metadata = {
  title: "Works",
  description:
    "Check out all of the works created by Mandjou Dama, a frontend developer specializing in Web Development & UI Design. View the portfolio and get in touch to collaborate on your next project.",
};

export default function Work() {
  return (
    <main className="works-page">
      <div className="hero">
        <h1>Our branding success stories.</h1>

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

        <LetsTalkSection />

        {/* SEPARATOR */}
        <SectionSeparator />
      </div>
    </main>
  );
}
