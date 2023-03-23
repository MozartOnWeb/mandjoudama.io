import Link from "next/link";

import { HorizontalSeparator } from "../separators/Separators";

import { LogoSvg } from "@/public/assets/icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="top">
          <div className="logo-container">
            <LogoSvg />
            <h2>Mandjou Dama.</h2>
          </div>
          <p>
            Thank you for taking the time to explore my Front End Developer
            portfolio website. Whether you are a potential client, partner, or
            simply interested in my work, I hope that my portfolio has provided
            you with insight into my skills and capabilities. If you have any
            questions or would like to learn more about my services, please
            don&apos;t hesitate to reach out to me. I look forward to hearing
            from you soon.
          </p>
          <p className="outro">Let&apos;s Build Something Great Together !</p>
        </div>

        <div className="bottom">
          <Link href={""}>GH</Link>
          <Link href={""}>LI</Link>
          <Link href={""}>TW</Link>
        </div>
      </div>

      <HorizontalSeparator />

      <div className="copyright">
        <p>Yoboo Studio - Tous droits réservés.</p>
      </div>
    </footer>
  );
}
