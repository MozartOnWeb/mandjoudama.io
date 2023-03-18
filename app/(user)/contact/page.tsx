import Link from "next/link";

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-page-hero">
        <div className="left">
          <h1>Let&apos;s Connect and Create Something Great Together.</h1>

          <div>
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
            <input type="text" />
            <input type="email" />
            <textarea cols={30} rows={10} />
          </form>
        </div>
      </div>
    </main>
  );
}
