import "../../sass/index.scss";

import type { Metadata } from "next";

//import components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

//import fonts
import { Neue_Mechanica, Roboto_Mono, Satoshi } from "@/public/assets/fonts";

export const metadata: Metadata = {
  title: {
    default: "Mandjou Dama",
    template: "%s | Mandjou Dama",
  },
  keywords: ["Mandjou", "Dama"],
  description:
    "I'm Mandjou, a 24 years old react.js front-end developer from Mali.",
  category: "Technology",
  creator: "Mandjou Dama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/fav.ico",
  },
  verification: {
    google: "zJ3JUWckcXM-wlkSjQMzJZ6FQnY2FlqVTK_E6u7xcMs",
    other: {
      me: ["mandjoudama@gmail.com", "https://mandjoudama.ml"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${Neue_Mechanica.variable} ${Roboto_Mono.variable} ${Satoshi.variable}`}
      >
        <main className="container">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
