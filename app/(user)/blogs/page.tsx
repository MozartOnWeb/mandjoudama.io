import Link from "next/link";
import Image from "next/image";

import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import Image4 from "../../../public/assets/images/1.jpg";

export default function Blogs() {
  return (
    <main className="blogs-page">
      <section className="blogs-page-hero">
        <h1>Blogs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <section className="blogs-page-latest-blog">
        <div className="left">
          <Link href={""}>
            <Image src={Image4} alt="fdf" />
          </Link>
          <p className="category">Web dev</p>
          <Link className="description" href={""}>
            Things to Look for When Comparing Branding Alternatives
          </Link>
        </div>

        <VerticalSeparator />

        <div className="left">
          <Link href={""}>
            <Image src={Image4} alt="fdf" />
          </Link>
          <p className="category">Web dev</p>
          <Link className="description" href={""}>
            Things to Look for When Comparing Branding Alternatives
          </Link>
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <section className="blogs-list"></section>
    </main>
  );
}
