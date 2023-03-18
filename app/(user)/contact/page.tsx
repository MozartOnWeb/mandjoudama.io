import Link from "next/link";

import { SectionSeparator } from "@/components/separators/Separators";

export default function Contact() {
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
    </main>
  );
}
