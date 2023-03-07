"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function Hamburger() {
  return (
    <motion.div
      style={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{ duration: 0.2 }}
      className="hamburgerContainer"
    >
      <div>
        <Link href={""}>Services</Link>
        <span />
        <Link href={""}>Travaux</Link>
        <span />
        <Link href={""}>Blog</Link>
        <span />
        <Link href={""}>let&apos;s Talk</Link>
      </div>
    </motion.div>
  );
}
