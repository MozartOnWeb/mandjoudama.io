"use client";

import { useRef } from "react";

import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";

import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import { VerticalSeparator } from "@/components/separators/Separators";
import { WebDevIcon } from "@/public/assets/icons";

import Image1 from "../../public/assets/images/1.jpg";

export const SingleService = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "relative";
  });

  return (
    <motion.div ref={targetRef} className="single-service">
      <div className="left">
        <div className="left-inner">
          <div className="service-header">
            <WebDevIcon />
            <h2>Web Dev</h2>
          </div>

          <div className="service-categories">
            <p>Web Design</p>
            <p>Web Dev</p>
            <p>Seo Optimization</p>
          </div>

          <AnimatedButton
            letters={[
              "g",
              "e",
              "t",
              "\u00a0",
              "i",
              "n",
              "\u00a0",
              "t",
              "o",
              "u",
              "c",
              "h",
            ]}
          />
        </div>
      </div>

      <VerticalSeparator />

      <div className="right">
        <h5 className="service-headline">
          Boost your online presence with our cutting-edge web development
          solutions. We create custom websites that are responsive,
          user-friendly, and optimized for search engines. Contact us now to
          learn more!
        </h5>

        <div className="service-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            expedita, est alias natus quae accusamus voluptas totam tempora
            adipisci in porro asperiores et non deserunt mollitia iusto cumque
            dignissimos dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            expedita, est alias natus quae accusamus voluptas totam tempora
            adipisci in porro asperiores et non deserunt mollitia iusto cumque
            dignissimos dolor.
          </p>
        </div>

        <Image src={Image1} alt="service-img" />
      </div>
    </motion.div>
  );
};
