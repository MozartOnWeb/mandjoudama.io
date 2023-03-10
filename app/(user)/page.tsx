import Link from "next/link";
import Image from "next/image";

//import section
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";

//import components
import { AnimatedButton } from "@/components/buttons/AnimatedButton";

import {
  BrandingIcon,
  ContentIcon,
  DesignIcon,
  HeroIcon,
  HowWeWorkIcon,
  LogoSvg,
  WebDevIcon,
} from "@/public/assets/icons";

import Image1 from "../../public/assets/images/1.jpg";

export default function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="info-container">
          <div>
            <h1 className="headline">
              I&apos;m Mandjou, a 24 years old Front End developer from Mali.
            </h1>
            <p className="subline">
              Are you looking for perfect website ? Then you are in the right
              place. Get professional results you are looking for. Your work
              will be done on time and as you require. Just reach out and let me
              know your needs.
            </p>
          </div>
          <HeroIcon />
        </div>
        <div className="video-container">
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
      </section>

      {/* SEPARATOR */}
      <span className="horizontal-bar" />

      {/* OUR CLIENT SECTION */}
      <section className="our-client-container">
        <h2>Our Clients</h2>
        <span className="vertical-bar" />
        <div className="clients-logo-container">
          <LogoSvg />
          <LogoSvg />
          <LogoSvg />
          <LogoSvg />
          <LogoSvg />
          <LogoSvg />
        </div>
      </section>

      {/* SEPARATOR */}
      <span className="horizontal-bar" />

      {/* WHAT WE DO SECTION */}
      <section className="what-we-do-container">
        <h2>What We Do</h2>
        <span className="vertical-bar" />

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
            <span className="service-vertical-bar" />
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

          <span className="service-horizontal-bar" />

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
            <span className="service-vertical-bar" />
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
      <span className="horizontal-bar" />

      {/* FEATURED WORK */}
      <section className="featured-work">
        <div className="left-container">
          <h2>
            Featured <br /> Work
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <AnimatedButton
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

        <span className="featured-horizontal-bar" />

        <div className="right-container">
          <Link href={""} className="top-project-container">
            <Image src={Image1} alt="" />
            <div className="project-details-container">
              <p className="name">Dancing Stars</p>
              <p className="date">2022</p>
            </div>
          </Link>

          <span className="right-container-horizontal-bar" />

          <div className="bottom-projects-container">
            <div className="bottom-projects-row">
              <Link href={""} className="single-project-container">
                <Image src={Image1} alt="" />
                <div className="project-details-container">
                  <p className="name">Dancing Stars</p>
                  <p className="date">2022</p>
                </div>
              </Link>

              <span className="bottom-projects-row-bar" />

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

              <span className="bottom-projects-row-bar" />

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
      <span className="horizontal-bar" />

      {/* HOW WE WORK */}
      <section className="how-we-work">
        <div className="left">
          <div>
            <h2>How we work</h2>
            <h5>We help our clients succeed with innovative strategies.</h5>
          </div>

          <HowWeWorkIcon />
        </div>

        <span className="how-we-work-vertical" />

        <div className="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua magna ac
            placerat erat.
          </p>

          <AnimatedButton
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
      <span className="horizontal-bar" />

      {/* OUR VALUES SECTION */}
      <section className="our-values-container">
        <h2 className="our-values-headline">Our values</h2>

        <span className="values-headline-separator" />

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

          <span className="values-bottom-separator" />

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

            <span className="right-item-separator" />

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

            <span className="right-item-separator" />

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
      <span className="horizontal-bar" />

      {/* HOME CONTACT */}
      <LetsTalkSection />

      {/* SEPARATOR */}
      <span className="horizontal-bar" />

      {/* LATEST POSTS */}
      <section className="home-latest-posts">
        <div className="latest-posts-headline">
          <h2>Latest Posts</h2>
          <AnimatedButton
            style="outline"
            letters={["v", "i", "e", "w", "\u00a0", "a", "l", "l"]}
          />
        </div>

        <span className="home-latest-headline-separator" />

        <div className="posts-container">
          <div className="single-post">
            <Link href={""}>
              <Image className="post-image" src={Image1} alt="post-image" />
            </Link>

            <Link className="category" href={""}>
              Branding
            </Link>

            <Link className="description" href={""}>
              Things to Look for When Comparing Branding Alternatives.
            </Link>
          </div>

          <span className="post-separator" />

          <div className="single-post">
            <Link href={""}>
              <Image className="post-image" src={Image1} alt="post-image" />
            </Link>

            <Link className="category" href={""}>
              Branding
            </Link>

            <Link className="description" href={""}>
              Things to Look for When Comparing Branding Alternatives.
            </Link>
          </div>

          <span className="post-separator" />

          <div className="single-post">
            <Link href={""}>
              <Image className="post-image" src={Image1} alt="post-image" />
            </Link>

            <Link className="category" href={""}>
              Branding
            </Link>

            <Link className="description" href={""}>
              Things to Look for When Comparing Branding Alternatives.
            </Link>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <span className="horizontal-bar" />
    </main>
  );
}
