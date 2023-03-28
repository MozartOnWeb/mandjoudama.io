import { OnPageLink } from "@/components/buttons/OnPageLink";
import { SectionSeparator } from "@/components/separators/Separators";

import { SingleService } from "@/sections/services/SingleService";
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";

import { WebDevIcon, DesignIcon } from "@/public/assets/icons";

export const metadata = {
  title: "Services",
  description:
    "Check out all of the services provides by Mandjou Dama, a frontend developer specializing in Web Development & UI Design. View the portfolio and get in touch to collaborate on your next project.",
};

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <h1>Let&apos;s bring your brand to the next level.</h1>

        <div className="hero-tags-links">
          <OnPageLink
            style="outline"
            letters={["w", "e", "b", "\u00a0", "d", "e", "v"]}
            href="#web-dev"
          />
          <OnPageLink
            style="outline"
            letters={["u", "i", "\u00a0", "d", "e", "s", "i", "g", "n"]}
            href="#ui-design"
          />
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <div>
        <SingleService
          serviceName="Web Dev"
          serviceIcon={<WebDevIcon />}
          serviceDescription1="As a front-end web developer, I understand that a strong online presence is essential for the success of any business. That's why I work closely with my clients to craft custom websites that leave a lasting impression on their potential customers. With my cutting-edge web development solutions, I can help your business achieve a strong online presence that sets you apart from the competition."
          serviceDescription2="I collaborate closely with my clients to understand their business objectives and target audience. By incorporating the latest front-end technologies, I can create custom websites that are not only visually stunning but also highly responsive and user-friendly. Whether you need a simple website or a more complex web app, I have the expertise to deliver web development solutions that meet your requirements."
          serviceCategories={[
            "Web Dev",
            "Seo Optimization",
            "Responsive Design",
          ]}
          serviceHeadline="Boost your online presence with our cutting-edge web development solutions. I create custom websites that are responsive, user-friendly, and optimized for search engines."
          id="web-dev"
        />
        {/* SEPARATOR */}
        <SectionSeparator />

        <SingleService
          serviceName="Ui Design"
          serviceIcon={<DesignIcon />}
          serviceDescription1="As a UI designer, I understand that a visually appealing and user-friendly website is essential for the success of any business. That's why I work closely with my clients to create custom UI designs that leave a lasting impression on their potential customers. With my expertise in UI design, I can help your business achieve a strong online presence that sets you apart from the competition."
          serviceDescription2="I collaborate closely with my clients to understand their brand identity, target audience, and business objectives. By incorporating the latest UI design trends, I can create custom designs that are not only visually stunning but also highly intuitive and user-friendly. Whether you need a website redesign or a new website from scratch, I have the skills to deliver UI design solutions that meet your requirements."
          serviceCategories={[
            "Web & Mobile Design",
            "User Research",
            "Branding Design",
          ]}
          serviceHeadline="Enhance your online presence with our innovative UI design solutions. I specialize in creating custom website designs that are visually stunning, intuitive to use, and optimized for user engagement."
          id="ui-design"
        />
      </div>

      {/* SEPARATOR */}
      <SectionSeparator />

      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
