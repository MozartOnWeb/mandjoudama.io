import Link from "next/link";

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, libero nisi dolore earum neque dignissimos ducimus harum
            adipisci recusandae suscipit.
          </p>
        </div>

        <div className="bottom">
          <Link href={""}>GH</Link>
          <Link href={""}>LI</Link>
          <Link href={""}>TW</Link>
        </div>
      </div>

      <span className="horizontal-bar" />

      <div className="copyright">
        <p>Yoboo Studio - Tous droits réservés.</p>
      </div>
    </footer>
  );
}
