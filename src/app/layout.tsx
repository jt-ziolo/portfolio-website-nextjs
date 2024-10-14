import type { Metadata } from "next";

import ExternalLink from "@/components/external-link";
import HeadroomWrapper from "@/components/headroom-wrapper";
import ScrollProvider from "@/components/scroll-provider";
import SkipLink from "@/components/skip-link";
import { socialBarDark } from "@/lib/social-bar";
import logoImg from "@/public/logo.png";
import { siteConfig } from "@/site-config";
import {
  Arvo,
  Open_Sans,
  Poppins,
  Quattrocento,
  Roboto_Condensed,
} from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";

import styles from "./layout.module.css";
import "./normalize.css";
import "./globals.css";

const title = Arvo({
  subsets: ["latin"],
  variable: "--font-title",
  weight: "400",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600"],
});

const heading = Quattrocento({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: "700",
});

// Metadata
export const metadata: Metadata = {
  title: {
    template: siteConfig.titleTemplate,
    default: siteConfig.titleDefault,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${title.variable} ${body.variable} ${heading.variable}`}
      >
        <Suspense>
          <ScrollProvider>
            <SkipLink href="#content" />
            <HeadroomWrapper />
            {children}
            <footer className={styles.footer}>
              <div>
                <small>©2024 Telomeric Software LLC (DBA JT Ziolo)</small>
                <div className={styles.footerLinks}>
                  <Link
                    className="nav"
                    href="./policies/#privacy"
                    scroll={false}
                  >
                    <small>Privacy Policy</small>
                  </Link>
                  <Link
                    className="nav"
                    href="./policies/#cookie"
                    scroll={false}
                  >
                    <small>Cookie Policy</small>
                  </Link>
                </div>
              </div>
              {socialBarDark}
            </footer>
          </ScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
