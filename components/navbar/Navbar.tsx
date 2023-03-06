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
          <Link href={""}>Services</Link>
          <Link href={""}>Travaux</Link>
          <Link href={""}>Blog</Link>
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
      </div>

      <div className="horizontal-bar" />
    </nav>
  );
}
