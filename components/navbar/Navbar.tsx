"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href={""} className="logo">
        Mandjou Dama.
      </Link>

      <div className="linksWrapper">
        <div className="links">
          <Link className="link" href={""}>
            Services
          </Link>
          <Link className="link" href={""}>
            Travaux
          </Link>
          <Link className="link" href={""}>
            Blog
          </Link>
          <Link className="lets-talk" href={""}>
            <span className="one">
              <span>L</span>
              <span>e</span>
              <span>t</span>
              <span>&apos;</span>
              <span>s</span>
              <span> </span>
              <span>t</span>
              <span>a</span>
              <span>l</span>
              <span>k</span>
            </span>
            <span className="two">
              <span>L</span>
              <span>e</span>
              <span>t</span>
              <span>&apos;</span>
              <span>s</span>
              <span> </span>
              <span>t</span>
              <span>a</span>
              <span>l</span>
              <span>k</span>
            </span>
          </Link>
        </div>

        <div className="vertical-bar" />

        <div className="socials">
          <Link href={""}>GH</Link>
          <Link href={""}>LI</Link>
          <Link href={""}>TW</Link>
        </div>

        {/* Hamburger Menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div className="horizontal-bar" />
    </nav>
  );
}
