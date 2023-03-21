//import sections
import { LetsTalkSection } from "@/sections/contact/LetsTalkSection";
import {
  FeaturedWork,
  Hero,
  HowWeWork,
  LatestPosts,
  OurClients,
  OurValues,
  WhatWeDo,
} from "@/sections/home";

import { SectionSeparator } from "@/components/separators/Separators";

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
      <WhatWeDo />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* FEATURED WORK */}
      <FeaturedWork />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* HOW WE WORK */}
      <HowWeWork />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* OUR VALUES SECTION */}
      <OurValues />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* HOME CONTACT */}
      <LetsTalkSection />

      {/* SEPARATOR */}
      <SectionSeparator />

      {/* LATEST POSTS */}
      <LatestPosts />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
