import { HowWeWorkIcon } from "@/public/assets/icons";

export const NewsLetter = () => {
  return (
    <section className="news-letter-container">
      <div className="top">
        <h2>NEWSLETTER</h2>
        <h5>Get the latest news into your inbox</h5>
      </div>

      <div className="bottom">
        <HowWeWorkIcon />

        <form method="post">
          <input placeholder="Your Email" type="email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};
