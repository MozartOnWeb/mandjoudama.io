import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  HorizontalSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import { HomeContactIcon } from "@/public/assets/icons";

export const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      <div className="left">
        <div className="left-content">
          <h2>Contact</h2>
          <h5>Let&apos;s bring your brand to the next level.</h5>
        </div>

        <HomeContactIcon />
      </div>

      <HorizontalSeparator />
      <VerticalSeparator />

      <div className="right">
        <p>
          Whether you need a new website, a redesign, or ongoing support and
          maintenance, I am here to help. Contact me today to learn more about
          how I can help you elevate your brand and achieve your business
          objectives.
        </p>
        <AnimatedButton
          href="/contact"
          letters={["l", "e", "t", "\u2019", "s", "\u00a0", "t", "a", "l", "k"]}
        />
      </div>
    </section>
  );
};
