"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const SectionSeparator = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.span
      initial={{ width: "0%", left: "0%" }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "50% 0px 0px 0px" }}
      className="section-separator"
    />
  );
};

export const VerticalSeparator = () => {
  return (
    <motion.span
      initial={{ height: "0%", top: "0%" }}
      whileInView={{ height: "100%" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "200px 0px 0px 0px" }}
      className="vertical-separator"
    />
  );
};
