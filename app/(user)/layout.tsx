import "../../sass/index.scss";

import type { Metadata } from "next";

//import components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

//import fonts
import { Neue_Mechanica, Roboto_Mono, Satoshi } from "@/public/assets/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://mandjoudama.com"),
  title: {
    default: "Mandjou Dama",
    template: "%s | Mandjou Dama",
  },
  description: "Front-end web developer & UI designer.",
  openGraph: {
    title: "Mandjou Dama",
    description: "Front-end web developer & UI designer.",
    url: "https://mandjoudama.com",
    siteName: "Mandjou Dama",
    images: [
      {
        url: "https://mandjoudama.com/opengraph-image.jpg",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  verification: {
    google: "_PmIseyz3VvJwrGjQqJJYKHD_THMBlF7TxopDvZUOxQ",
    other: {
      me: ["mandjoudama@gmail.com", "https://mandjoudama.com"],
    },
  },
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
