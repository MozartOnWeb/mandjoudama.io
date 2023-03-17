import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import { AnimatedButton } from "@/components/buttons/AnimatedButton";

export default function Blog() {
  return (
    <main className="single-blog-page">
      <section className="single-blog-page-hero">
        <AnimatedButton
          style="outline"
          letters={["g", "o", "", "b", "a", "c", "k"]}
        />

        <div className="infos-container">
          <h1>Things to Look for When Comparing Branding Alternatives</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore accumsan magna aliqua.
          </p>
        </div>

        <VerticalSeparator />

        <div className="blog-details-container">
          <div className="work-detail">
            <p className="title">Date</p>
            <p>NOVEMBER 7, 2022</p>
          </div>
          <div className="work-detail">
            <p className="title">CATEGORY</p>
            <p>BRANDING</p>
          </div>
          <div className="work-detail">
            <p className="title">READING TIME</p>
            <p>12 MIN</p>
          </div>
        </div>
      </section>

      <SectionSeparator />
    </main>
  );
}
