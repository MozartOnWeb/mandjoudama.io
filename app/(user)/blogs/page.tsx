import Link from "next/link";
import Image from "next/image";

import { LittleBlog } from "@/components/blogs/LittleBlog";

import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import Image4 from "../../../public/assets/images/1.jpg";
import { NewsLetter } from "@/sections/blogs/NewsLetter";

export const metadata = {
  title: "Blogs",
  description:
    "Check out all of the blog content write by Mandjou Dama, a frontend developer specializing in Web Development & UI Design.",
};

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
        <p>
          Welcome to my blog, where I explore the latest trends and best
          practices in front-end development. In this space, I share my
          insights, tips, and tutorials on a variety of topics, including web
          design, user experience, performance optimization, and more.
        </p>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <section className="blogs-page-latest-blog">
        <div className="left">
          <Link href="/blogs/blog">
            <Image src={Image4} alt="fdf" />
          </Link>
          <p className="category">Web dev</p>
          <Link className="description" href="/blogs/blog">
            Things to Look for When Comparing Branding Alternatives
          </Link>
        </div>

        <VerticalSeparator />

        <div className="left">
          <Link href="/blogs/blog">
            <Image src={Image4} alt="fdf" />
          </Link>
          <p className="category">Web dev</p>
          <Link className="description" href="/blogs/blog">
            Things to Look for When Comparing Branding Alternatives
          </Link>
        </div>
      </section>

      {/* SEPARATOR */}
      <SectionSeparator />

      <section className="blogs-list">
        {blogs.map((blog) => (
          <LittleBlog href="/blogs/blog" key={blog.id} />
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
