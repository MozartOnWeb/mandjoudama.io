import {
  BrandingIcon,
  ContentIcon,
  DesignIcon,
  HeroIcon,
  LogoSvg,
  WebDevIcon,
} from "@/public/assets/icons";

export default function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="info-container">
          <div>
            <h1 className="headline">
              I&apos;m Mandjou, a 24 years old Front-End developer from Mali.
            </h1>
            <p className="subline">
              Are you looking for perfect website ? Then you are in the right
              place. get professional results you are looking for. Your work
              will be done on time and as you require. just reach out and let me
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
    </main>
  );
}
