import {
  HorizontalSeparator,
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import {
  BrandingIcon,
  ContentIcon,
  DesignIcon,
  WebDevIcon,
} from "@/public/assets/icons";

export const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
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

        <HorizontalSeparator type="with-margin" />

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
  );
};
