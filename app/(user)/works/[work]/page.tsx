import Image from "next/image";

import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";
import {
  LogoSvg,
  WorkChallengeIcon,
  WorkResultIcon,
  WorkSolutionIcon,
} from "@/public/assets/icons";

import Image1 from "../../../../public/assets/images/1.jpg";
import Image2 from "../../../../public/assets/images/2.jpg";
import Image4 from "../../../../public/assets/images/4.png";

export default function Work() {
  return (
    <main className="single-work-page">
      <section className="hero">
        <div className="left">
          <h1>DANCING STARS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            sit amet cursus sit amet dictum sit amet justo. Dui nunc mattis enim
            ut tellus elementum. Cum sociis natoque penatibus et magnis dis. In
            mollis nunc sed id semper risus.
          </p>
        </div>

        {/* SEPARATOR */}
        <VerticalSeparator />

        <div className="right">
          <div className="work-detail">
            <p className="title">Client</p>
            <p>Tiecoura N&apos;Daou</p>
          </div>
          <div className="work-detail">
            <p className="title">Year</p>
            <p>2021</p>
          </div>
          <div className="work-detail">
            <p className="title">TIMELINE</p>
            <p>8 weeks</p>
          </div>
          <div className="work-detail">
            <p className="title">Services</p>
            <div className="work-details-services">
              <p>Web dev</p>
              <p>web design</p>
              <p>content</p>
            </div>
          </div>
          <div className="work-detail">
            <p className="title">Website</p>
            <p>tiecourandaou.com</p>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <section className="project-overview-container">
        <div className="left">
          <div className="left-inner-container">
            <div className="single-overview">
              <WorkChallengeIcon />
              <h5>CHALLENGE</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque in dictum non consectetur a erat nam at.
              </p>
            </div>

            <div className="single-overview">
              <WorkSolutionIcon />
              <h5>Solution</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque in dictum non consectetur a erat nam at.
              </p>
            </div>

            <div className="single-overview">
              <WorkResultIcon />
              <h5>Result</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque in dictum non consectetur a erat nam at.
              </p>
            </div>
          </div>
        </div>

        {/* SEPARATOR */}
        <VerticalSeparator />

        <div className="right">
          <Image src={Image1} alt="right" />
          <Image src={Image2} alt="right" />
          <Image src={Image4} alt="right" />
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* LETS TALK SECTION */}
      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
