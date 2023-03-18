"use client";

import { useState } from "react";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import {
  SectionSeparator,
  VerticalSeparator,
} from "@/components/separators/Separators";

const faqs = [
  {
    question: "Integer vitae justo eget magna?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor. Consequat nisl vel pretium lectus quam id. Mattis enim ut tellus elementum.",
  },
  {
    question: "Dolor magna eget est lorem ipsum?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor. Consequat nisl vel pretium lectus quam id. Mattis enim ut tellus elementum.",
  },
  {
    question: "Ac tincidunt vitae semper quis lectus?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor. Consequat nisl vel pretium lectus quam id. Mattis enim ut tellus elementum.",
  },
  {
    question: "Sagittis orci a scelerisque?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor. Consequat nisl vel pretium lectus quam id. Mattis enim ut tellus elementum.",
  },
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  };

  const variants2 = {
    open: { display: "block", y: 0, opacity: 1 },
    closed: { display: "none", y: -20, opacity: 0 },
  };

  const handleAnimate = (blogId: string) => {
    if (blogId) {
      setIsOpen((isOpen) => !isOpen);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <div className="left">
          <div className="left-top">
            <h2>Contact</h2>
            <h5>Let&apos;s Connect and Create Something Great Together.</h5>
          </div>

          <div className="left-bottom">
            <h5>Find me on</h5>
            <div className="socials-links">
              <Link href={""}>GH</Link>
              <Link href={""}>LI</Link>
              <Link href={""}>TW</Link>
            </div>
          </div>
        </div>

        <div className="right">
          <form method="post">
            <input placeholder="Your Name" type="text" />
            <input placeholder="Your Email" type="email" />
            <textarea placeholder="Your Message" rows={8} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <SectionSeparator />

      <section className="faqs">
        <div className="left">
          <h2>FAQ</h2>
          <h5>Common Questions.</h5>
        </div>

        <VerticalSeparator />

        <div className="right">
          {faqs.map((faq, index) => (
            <AnimatePresence key={index}>
              <motion.div className="faq-container">
                <div
                  onClick={() => handleAnimate(faq.question)}
                  className="question"
                >
                  <h6>{faq.question}</h6>
                  <div className="svg-container">
                    <motion.svg
                      animate={isOpen ? "open" : "closed"}
                      variants={variants}
                      width="86"
                      height="86"
                      viewBox="0 0 86 86"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 43H85"
                        stroke="#ffffff"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M43 85V1"
                        stroke="#ffffff"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </div>

                <motion.p
                  animate={isOpen ? "open" : "closed"}
                  variants={variants2}
                  className="response"
                >
                  {faq.response}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </section>

      <SectionSeparator />
    </main>
  );
}
