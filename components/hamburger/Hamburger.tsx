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
      className="hamburgerContainer"
    >
      <div>
        <Link href={"/services"}>Services</Link>
        <span />
        <Link href={""}>Works</Link>
        <span />
        <Link href={""}>Blog</Link>
        <span />
        <Link href={""}>let&apos;s Talk</Link>
      </div>
    </motion.div>
  );
}
