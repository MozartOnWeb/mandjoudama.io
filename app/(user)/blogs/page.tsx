import Link from "next/link";
import Image from "next/image";

import { LittleBlog } from "@/components/blogs/LittleBlog";

import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import Image4 from "../../../public/assets/images/1.jpg";
import { NewsLetter } from "@/components/blogs/NewsLetter";

const blogs = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];

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

      <section className="blogs-list">
        {blogs.map((blog) => (
          <LittleBlog key={blog.id} />
        ))}
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <NewsLetter />

      {/* SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
