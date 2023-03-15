import { AnimatedButton } from "@/components/buttons/AnimatedButton";

import Image from "next/image";
import Link from "next/link";

import Image1 from "../../public/assets/images/1.jpg";

export const SingleWorkSection = () => {
  return (
    <section className="single-work-section">
      <div className="left">
        <div className="work-description">
          <h5>DANCING STARS</h5>
          <div className="work-categories">
            <p>web dev</p>
            <p>web design</p>
            <p>content</p>
          </div>
        </div>

        <AnimatedButton
          style="outline"
          letters={[
            "v",
            "i",
            "e",
            "w",
            "\u00a0",
            "p",
            "r",
            "o",
            "j",
            "e",
            "c",
            "t",
          ]}
        />
      </div>

      <div className="right">
        <Link href={""}>
          <Image src={Image1} alt="project-img" />
        </Link>
      </div>
    </section>
  );
};
