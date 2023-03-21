import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";
import { HowWeWorkIcon } from "@/public/assets/icons";

export const HowWeWork = () => {
  return (
    <section className="how-we-work-section">
      <div className="left">
        <div>
          <h2>How we work</h2>
          <h5>We help our clients succeed with innovative strategies.</h5>
        </div>

        <HowWeWorkIcon />
      </div>

      <VerticalSeparator />
      <SectionSeparator />

      <div className="right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua magna ac
          placerat erat.
        </p>

        <AnimatedButton
          href="/services"
          letters={["m", "y", "\u00a0", "s", "e", "r", "v", "i", "c", "e", "s"]}
        />
      </div>
    </section>
  );
};
