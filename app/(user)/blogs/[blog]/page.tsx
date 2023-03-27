import Image from "next/image";
import Link from "next/link";

import {
  HorizontalSeparator,
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

import { AnimatedButton } from "@/components/buttons/AnimatedButton";

import Image1 from "../../../../public/assets/images/4.png";
import { NewsLetter } from "@/sections/blogs/NewsLetter";

export default function Blog() {
  return (
    <main className="single-blog-page">
      <section className="single-blog-page-hero">
        <AnimatedButton
          href=""
          style="outline"
          letters={["g", "o", "\u00a0", "b", "a", "c", "k"]}
        />

        <div className="infos-container">
          <h1>Why I&apos;m Optimistic About JavaScript&apos;s Future</h1>
          <p>
            Developers want to write JavaScript -- and they want it to run
            everywhere -- in the browser, on the server, or at the edge.
          </p>
        </div>

        <VerticalSeparator />

        <div className="blog-details-container">
          <div className="work-detail">
            <p className="title">Date</p>
            <p>NOVEMBER 7, 2022</p>
          </div>
          <div className="work-detail">
            <p className="title">CATEGORY</p>
            <p>Web dev</p>
          </div>
          <div className="work-detail">
            <p className="title">READING TIME</p>
            <p>12 MIN</p>
          </div>
        </div>
      </section>

      <section className="blog-image-container">
        <Image src={Image1} alt="blog-img" />
      </section>

      {/* SECTION SEPARATOR */}
      <SectionSeparator />

      <section className="blog-content">
        <div className="middle">
          <h6>Et malesuada fames ac turpis</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio
            morbi quis commodo odio. Et malesuada fames ac turpis egestas sed
            tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis orci a. Fringilla ut morbi tincidunt augue interdum.
          </p>
          <p>
            Ultrices in iaculis nunc sed augue lacus viverra. Erat imperdiet sed
            euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus
            imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet
            commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
            Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at
            augue. Blandit aliquam etiam erat velit scelerisque in dictum. In
            hac habitasse platea dictumst vestibulum rhoncus. Molestie ac
            feugiat sed lectus vestibulum.
          </p>
          <h6>Nascetur ridiculus mus</h6>
          <p>
            Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci
            a scelerisque purus semper eget duis at. Porta lorem mollis aliquam
            ut porttitor leo a diam. In fermentum et sollicitudin ac orci
            phasellus egestas tellus. Mauris cursus mattis molestie a iaculis at
            erat pellentesque adipiscing. Nascetur ridiculus mus mauris vitae
            ultricies. Dui nunc mattis enim ut tellus. Duis convallis convallis
            tellus id interdum. Quis ipsum suspendisse ultrices gravida dictum
            fusce. Scelerisque mauris pellentesque pulvinar pellentesque.
            Tincidunt augue interdum velit euismod. Nibh tortor id aliquet
            lectus. Amet commodo nulla facilisi nullam. Vulputate ut pharetra
            sit amet aliquam id diam maecenas. Tellus pellentesque eu tincidunt
            tortor. Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
          <h6>Praesent semper feugiat nibh sed pulvinar proin</h6>
          <p>
            Aliquet enim tortor at auctor. Dignissim cras tincidunt lobortis
            feugiat vivamus at augue eget. Aliquam faucibus purus in massa
            tempor nec. Auctor urna nunc id cursus metus aliquam eleifend mi.
            Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit
            lectus. Et pharetra pharetra massa massa ultricies mi quis hendrerit
            dolor. In eu mi bibendum neque egestas congue quisque egestas. Etiam
            non quam lacus suspendisse faucibus interdum posuere lorem. Ligula
            ullamcorper malesuada proin libero nunc consequat interdum varius
            sit. Ullamcorper sit amet risus nullam eget. Hac habitasse platea
            dictumst quisque sagittis. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non. Id nibh tortor id aliquet lectus proin nibh
            nisl.
          </p>
        </div>

        <VerticalSeparator />
        <HorizontalSeparator />

        <div className="right">
          <div className="blog-sidebar-container">
            <div className="work-detail">
              <p className="title">Author</p>
              <p className="author">Mandjou Dama</p>
              <p className="author-note">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi delectus necessitatibus maxime explicabo doloribus sint
                quo quibusdam distinctio, error sunt maiores dolorum! Eum,
                beatae? Distinctio facere earum laudantium voluptas porro?
              </p>
            </div>
            <div className="work-detail">
              <p className="title">Share</p>
              <div className="links-container">
                <Link href={""}>GH</Link>
                <Link href={""}>LI</Link>
                <Link href={""}>TW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SEPARATOR */}
      <SectionSeparator />

      <NewsLetter />

      {/* SECTION SEPARATOR */}
      <SectionSeparator />
    </main>
  );
}
