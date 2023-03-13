import Link from "next/link";

import { LogoSvg } from "@/public/assets/icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <div className="left-top">
            <div className="logo-container">
              <LogoSvg />
              <h2>Mandjou Dama.</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          <div className="left-bottom">
            <Link href={""}>GH</Link>
            <Link href={""}>LI</Link>
            <Link href={""}>TW</Link>
          </div>
        </div>

        <span className="footer-vertical-separator" />

        <div className="right"></div>
      </div>

      <span className="horizontal-bar" />

      <div className="copyright">
        <p>Yoboo Studio - Tous droits réservés.</p>
      </div>
    </footer>
  );
}
