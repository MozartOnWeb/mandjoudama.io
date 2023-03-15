import { AnimatedButton } from "@/components/buttons/AnimatedButton";

import { HomeContactIcon } from "@/public/assets/icons";

export const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      <div className="left">
        <div className="left-content">
          <h2>Contact</h2>
          <h5>Let&apos;s bring your brand to the next level</h5>
        </div>

        <HomeContactIcon />
      </div>

      <span className="home-contact-separator" />

      <div className="right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua magna ac
          placerat erat.
        </p>
        <AnimatedButton
          href="/contact"
          letters={["l", "e", "t", "\u2019", "s", "\u00a0", "t", "a", "l", "k"]}
        />
      </div>
    </section>
  );
};
