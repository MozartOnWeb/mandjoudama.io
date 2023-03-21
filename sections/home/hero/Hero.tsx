import { HeroIcon } from "@/public/assets/icons";

export const Hero = () => {
  return (
    <section className="home-hero-section">
      <div className="info-container">
        <div>
          <h1 className="headline">
            I&apos;m Mandjou, a Front End developer from Mali.
          </h1>
          <p className="subline">
            Are you looking for perfect website ? Then you are in the right
            place. Get professional results you are looking for. Your work will
            be done on time and as you require. Just reach out and let me know
            your needs.
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
  );
};
