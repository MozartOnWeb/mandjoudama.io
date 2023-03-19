"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export const SectionSeparator = () => {
  const scrollRef = useRef(null);

  return (
    <motion.span
      initial={{ width: "0%", left: "0%" }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 1 }}
      className="section-separator"
    />
  );
};

export const VerticalSeparator = () => {
  return (
    <motion.span
      initial={{ height: "0%", top: "0%" }}
      whileInView={{ height: "100%" }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 1 }}
      className="vertical-separator"
    />
  );
};
