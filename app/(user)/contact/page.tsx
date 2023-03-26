"use client";

import { FormEvent, useState } from "react";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { Toast } from "@/components/toast/Toast";
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
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const form = e.currentTarget as HTMLFormElement;
    // const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    // const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    // const messageInput = form.elements.namedItem("message") as HTMLInputElement;

    // nameInput.classList.toggle("error", name.length === 0);
    // emailInput.classList.toggle("error", email.length === 0);
    // messageInput.classList.toggle("error", message.length === 0);

    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const variants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  };

  const handleAnimate = (blogId: string) => {
    setIsOpen(isOpen === blogId ? null : blogId);
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
          <form method="POST" onSubmit={onSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your Name"
              type="text"
              name="name"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Your Message"
              rows={8}
              name="message"
              required
            />
            <button type="submit">{loading ? "" : "Submit"}</button>
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
            <motion.div key={index} className="faq-container">
              <motion.div
                onClick={() => handleAnimate(faq.question)}
                className="question"
              >
                <h6>{faq.question}</h6>
                <div className="svg-container">
                  <motion.svg
                    animate={isOpen === faq.question ? "open" : "closed"}
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
              </motion.div>

              <AnimatePresence>
                {isOpen === faq.question && (
                  <motion.div
                    className="response-container"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="response-paragraph">{faq.response}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionSeparator />
      <Toast />
    </main>
  );
}
