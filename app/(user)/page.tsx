import Link from "next/link";
import Image from "next/image";

//import section
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";
import { Hero } from "@/sections/home/hero/Hero";
import { OurClients } from "@/sections/home/our-clients/OurClients";

//import components
import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  HorizontalSeparator,
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import {
  BrandingIcon,
  ContentIcon,
  DesignIcon,
  HowWeWorkIcon,
  LogoSvg,
  WebDevIcon,
} from "@/public/assets/icons";

import Image1 from "../../public/assets/images/1.jpg";
import { LittleBlog } from "@/components/blogs/LittleBlog";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />

      {/* SEPARATOR */}
      <SectionSeparator />

      <OurClients />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* WHAT WE DO SECTION */}
      <section className="what-we-do-container">
        <h2>What We Do</h2>
        <VerticalSeparator />

        <div className="services-container">
          {/* first row */}
          <div className="services-row">
            <div className="service">
              <WebDevIcon />
              <div className="service-infos">
                <h5>Web Dev</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  ducimus iure tenetur nesciunt perferendis, harum est voluptas
                  similique quisquam ipsa.
                </p>
              </div>
            </div>
            <VerticalSeparator />
            <HorizontalSeparator />
            <div className="service">
              <DesignIcon />
              <div className="service-infos">
                <h5>Design</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  ducimus iure tenetur nesciunt perferendis, harum est voluptas
                  similique quisquam ipsa.
                </p>
              </div>
            </div>
          </div>

          <SectionSeparator />

          {/* second row */}
          <div className="services-row">
            <div className="service">
              <BrandingIcon />
              <div className="service-infos">
                <h5>Branding</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  ducimus iure tenetur nesciunt perferendis, harum est voluptas
                  similique quisquam ipsa.
                </p>
              </div>
            </div>
            <VerticalSeparator />
            <HorizontalSeparator />
            <div className="service">
              <ContentIcon />
              <div className="service-infos">
                <h5>Content</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  ducimus iure tenetur nesciunt perferendis, harum est voluptas
                  similique quisquam ipsa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* FEATURED WORK */}
      <section className="featured-work">
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

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* HOW WE WORK */}
      <section className="how-we-work">
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
            letters={[
              "m",
              "y",
              "\u00a0",
              "s",
              "e",
              "r",
              "v",
              "i",
              "c",
              "e",
              "s",
            ]}
          />
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* OUR VALUES SECTION */}
      <section className="our-values-container">
        <h2 className="our-values-headline">Our values</h2>

        <SectionSeparator />

        <div className="values-bottom-container">
          <div className="left">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              controls={false}
              preload="auto"
              src={
                "https://firebasestorage.googleapis.com/v0/b/ikaziccsv.appspot.com/o/hero.mp4?alt=media&token=455c701e-67b5-42e3-ae76-33c5e6019556"
              }
            ></video>
          </div>

          <VerticalSeparator />

          <div className="right">
            {/* RIGHT ITEMS */}

            <div className="right-item">
              <p className="number">01</p>

              <div className="content">
                <h5>Vision</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, ullam aliquid velit expedita laborum atque amet aut
                  officiis corrupti quidem!
                </p>
              </div>
            </div>

            <SectionSeparator />

            <div className="right-item">
              <p className="number">02</p>

              <div className="content">
                <h5>Innovation</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, ullam aliquid velit expedita laborum atque amet aut
                  officiis corrupti quidem!
                </p>
              </div>
            </div>

            <SectionSeparator />

            <div className="right-item">
              <p className="number">03</p>

              <div className="content">
                <h5>Connection</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, ullam aliquid velit expedita laborum atque amet aut
                  officiis corrupti quidem!
                </p>
              </div>
            </div>

            {/* RIGHT ITEMS */}
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* HOME CONTACT */}
      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* LATEST POSTS */}
      <section className="home-latest-posts">
        <div className="latest-posts-headline">
          <h2>Latest Posts</h2>
          <AnimatedButton
            href="/blogs"
            style="outline"
            letters={["v", "i", "e", "w", "\u00a0", "a", "l", "l"]}
          />
        </div>

        <SectionSeparator />

        <div className="posts-container">
          <LittleBlog />
          <SectionSeparator />
          <VerticalSeparator />
          <LittleBlog />
          <SectionSeparator />
          <VerticalSeparator />
          <LittleBlog />
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
