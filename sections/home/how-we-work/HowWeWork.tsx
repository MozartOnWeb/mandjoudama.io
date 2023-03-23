import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  HorizontalSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";
import { HowWeWorkIcon } from "@/public/assets/icons";

export const HowWeWork = () => {
  return (
    <section className="how-we-work-section">
      <div className="left">
        <div>
          <h2>How I work</h2>
          <h5>
            Revolutionize your website with cutting-edge development techniques.
          </h5>
        </div>

        <HowWeWorkIcon />
      </div>

      <VerticalSeparator />
      <HorizontalSeparator />

      <div className="right">
        <p>
          At the core of my front-end development philosophy is the user
          experience. I strive to create web applications that are intuitive,
          efficient, and enjoyable to use. I use the latest front-end
          development technologies and best practices to build interfaces that
          are optimized for performance and accessibility. With my focus on user
          experience, I can help you improve customer satisfaction and drive
          business growth.
        </p>

        <AnimatedButton
          href="/services"
          letters={["m", "y", "\u00a0", "s", "e", "r", "v", "i", "c", "e", "s"]}
        />
      </div>
    </section>
  );
};
