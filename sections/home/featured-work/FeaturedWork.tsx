import Image from "next/image";
import Link from "next/link";

import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import Image1 from "../../../public/assets/images/4.png";

export const FeaturedWork = () => {
  return (
    <section className="featured-work-section">
      <div className="left-container">
        <div className="left-inner-container">
          <h2>
            Featured <br /> Work
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <AnimatedButton
            href="/works"
            letters={[
              "s",
              "e",
              "e",
              "\u00a0",
              "a",
              "l",
              "l",
              "\u00a0",
              "w",
              "o",
              "r",
              "k",
            ]}
          />
        </div>
      </div>

      <VerticalSeparator />

      <div className="right-container">
        <Link href={""} className="top-project-container">
          <Image src={Image1} alt="" />
          <div className="project-details-container">
            <p className="name">Dancing Stars</p>
            <p className="date">2022</p>
          </div>
        </Link>

        <SectionSeparator />

        <div className="bottom-projects-container">
          <div className="bottom-projects-row">
            <Link href={""} className="single-project-container">
              <Image src={Image1} alt="" />
              <div className="project-details-container">
                <p className="name">Dancing Stars</p>
                <p className="date">2022</p>
              </div>
            </Link>

            <VerticalSeparator />

            <Link href={""} className="single-project-container">
              <Image src={Image1} alt="" />
              <div className="project-details-container">
                <p className="name">Dancing Stars</p>
                <p className="date">2022</p>
              </div>
            </Link>
          </div>

          <div className="bottom-projects-row">
            <Link href={""} className="single-project-container">
              <Image src={Image1} alt="" />
              <div className="project-details-container">
                <p className="name">Dancing Stars</p>
                <p className="date">2022</p>
              </div>
            </Link>

            <VerticalSeparator />

            <Link href={""} className="single-project-container">
              <Image src={Image1} alt="" />
              <div className="project-details-container">
                <p className="name">Dancing Stars</p>
                <p className="date">2022</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
