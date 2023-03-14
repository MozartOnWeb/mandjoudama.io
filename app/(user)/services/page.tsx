import Image from "next/image";

import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import { WebDevIcon } from "@/public/assets/icons";

import Image1 from "../../../public/assets/images/1.jpg";

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

      <section className="services-list">
        <div className="single-service">
          <div className="left">
            <div className="service-header">
              <WebDevIcon />
              <h2>Web Dev</h2>
            </div>

            <div className="service-categories">
              <p>Web Design</p>
              <p>Web Dev</p>
              <p>Seo Optimization</p>
            </div>

            <AnimatedButton
              letters={[
                "g",
                "e",
                "t",
                "\u00a0",
                "i",
                "n",
                "\u00a0",
                "t",
                "o",
                "u",
                "c",
                "h",
              ]}
            />
          </div>

          <VerticalSeparator />

          <div className="right">
            <h5 className="service-headline">
              Boost your online presence with our cutting-edge web development
              solutions. We create custom websites that are responsive,
              user-friendly, and optimized for search engines. Contact us now to
              learn more!
            </h5>

            <div className="service-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, expedita, est alias natus quae accusamus voluptas
                totam tempora adipisci in porro asperiores et non deserunt
                mollitia iusto cumque dignissimos dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, expedita, est alias natus quae accusamus voluptas
                totam tempora adipisci in porro asperiores et non deserunt
                mollitia iusto cumque dignissimos dolor.
              </p>
            </div>

            <Image src={Image1} alt="service-img" />
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
