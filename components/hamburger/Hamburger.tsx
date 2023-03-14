"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { useHamburger } from "@/stores/useHamburger";

export default function Hamburger() {
  const closeHamburger = useHamburger((state) => state.closeHamburger);
  const isOpened = useHamburger((state) => state.isOpened);

  const handleCloseHamburger = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (isOpened) {
      closeHamburger();
      hamburgerMenu?.classList.remove("active-hamburger");
    }
  };

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
        <Link onClick={() => handleCloseHamburger()} href={"/services"}>
          Services
        </Link>
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
