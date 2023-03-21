"use client";
import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

export const SectionSeparator = () => {
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

export const HorizontalSeparator = () => {
  return (
    <motion.span
      initial={{ width: "0%", left: "0%" }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 1 }}
      className="horizontal-separator"
    />
  );
};
