import {
  HorizontalSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

export const OurValues = () => {
  return (
    <section className="our-values-section">
      <h2 className="our-values-headline">My values</h2>

      <HorizontalSeparator />

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
          <div className="right-item">
            <p className="number">01</p>

            <div className="content">
              <h5>Creativity</h5>
              <p>
                I believe that by embracing creativity and taking risks, we can
                create truly memorable web experiences that resonate with users
                and help businesses achieve their goals.
              </p>
            </div>
          </div>

          <HorizontalSeparator />

          <div className="right-item">
            <p className="number">02</p>

            <div className="content">
              <h5>Efficiency</h5>
              <p>
                I believe that efficiency is not just about getting the job done
                quickly, but also about delivering great results that meet the
                client&apos;s needs and exceed their expectations.
              </p>
            </div>
          </div>

          <HorizontalSeparator />

          <div className="right-item">
            <p className="number">03</p>

            <div className="content">
              <h5>Versatility</h5>
              <p>
                I believe that versatility is not just about having a diverse
                range of technical skills, but also about being able to think
                creatively and find innovative solutions to complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
