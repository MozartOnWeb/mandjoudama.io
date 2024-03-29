"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { useHamburger } from "@/stores/useHamburger";

import { LogoSvg } from "@/public/assets/icons";
import Hamburger from "../hamburger/Hamburger";
import { AnimatedButton } from "../buttons/AnimatedButton";

import { AnimatePresence } from "framer-motion";

const routes = [
  {
    id: 0,
    title: "services",
    path: "/services",
  },
  {
    id: 1,
    title: "works",
    path: "/works",
  },
  {
    id: 2,
    title: "blogs",
    path: "/blogs",
  },
];

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/works/")) {
    pathname = "/works";
  }

  if (pathname.includes("/blogs/")) {
    pathname = "/blogs";
  }

  const isOpened = useHamburger((state) => state.isOpened);
  const openHamburger = useHamburger((state) => state.openHamburger);
  const closeHamburger = useHamburger((state) => state.closeHamburger);

  const toggleHamburger = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (!isOpened) {
      openHamburger();
      hamburgerMenu?.classList.add("active-hamburger");
    } else {
      closeHamburger();
      hamburgerMenu?.classList.remove("active-hamburger");
    }
  };

  const handleCloseHamburger = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (isOpened) {
      closeHamburger();
      hamburgerMenu?.classList.remove("active-hamburger");
    }
  };

  return (
    <nav>
      <Link onClick={() => handleCloseHamburger()} href={""} className="logo">
        <LogoSvg />
        Mandjou Dama.
      </Link>

      <div className="linksWrapper">
        <div className="links">
          {routes.map((route) => (
            <Link
              onClick={() => handleCloseHamburger()}
              key={route.id}
              className={pathname === route.path ? "link active" : "link"}
              href={route.path}
            >
              {route.title}
            </Link>
          ))}

          <AnimatedButton
            href="/contact"
            letters={[
              "l",
              "e",
              "t",
              "\u2019",
              "s",
              "\u00a0",
              "t",
              "a",
              "l",
              "k",
            ]}
          />
        </div>

        <div className="vertical-bar" />

        <div className="socials">
          <Link href={""}>GH</Link>
          <Link href={""}>LI</Link>
          <Link href={""}>TW</Link>
        </div>

        {/* Hamburger Menu */}
        <svg
          onClick={() => toggleHamburger()}
          className="hamburger-menu"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>

      <motion.div
        initial={{ width: "0%", left: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="horizontal-bar"
      />
      <AnimatePresence>{isOpened && <Hamburger />}</AnimatePresence>
    </nav>
  );
}
