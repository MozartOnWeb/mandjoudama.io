import Link from "next/link";
import Image from "next/image";

//import section
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

//import components
import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import { HowWeWorkIcon } from "@/public/assets/icons";

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
