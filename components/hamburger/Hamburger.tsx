"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { useHamburger } from "@/stores/useHamburger";

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

export default function Hamburger() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/works/")) {
    pathname = "/works";
  }

  if (pathname.includes("/blogs/")) {
    pathname = "/blogs";
  }

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
      <div className="links-container">
        {routes.map((route) => (
          <div key={route.id} className="link-container">
            <Link
              onClick={() => handleCloseHamburger()}
              className={pathname === route.path ? "active" : ""}
              href={route.path}
            >
              {route.title}
            </Link>
            <span />
          </div>
        ))}
        <Link onClick={() => handleCloseHamburger()} href={"/contact"}>
          let&apos;s Talk
        </Link>
      </div>
    </motion.div>
  );
}
