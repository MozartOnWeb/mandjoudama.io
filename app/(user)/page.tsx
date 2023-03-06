import { HeroIcon } from "@/public/assets/icons";

export default function Home() {
  return (
    <main className="home">
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
            autoPlay
            loop
            muted
            src={require("../../public/assets/videos/hero.mp4")}
          ></video>
        </div>
        <span className="horizontal-bar" />
      </section>
    </main>
  );
}
