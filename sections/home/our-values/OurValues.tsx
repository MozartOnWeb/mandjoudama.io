import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

export const OurValues = () => {
  return (
    <section className="our-values-section">
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
  );
};
