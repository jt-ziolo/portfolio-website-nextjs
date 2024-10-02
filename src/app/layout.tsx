import type { Metadata } from "next";
import logoImg from "@/public/logo.png";
import Image from "next/image";
import styles from "./layout.module.css";
import HeadroomWrapper from "@/components/headroom-wrapper";
import {
  Arvo,
  Open_Sans,
  Poppins,
  Quattrocento,
  Roboto_Condensed,
} from "next/font/google";
import "./normalize.css";
import "./globals.css";
import { siteConfig } from "@/site-config";
import Link from "next/link";
import { socialBarDark } from "@/components/social-bar";
import SkipLink from "@/components/skip-link";
import { useMediaQuery } from "react-responsive";
import { devToUrl } from "@/social-info";
import { externalLinkProps } from "@/external-link-props";
import ExternalLink from "@/components/external-link";

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
  weight: "400",
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
  // TODO
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 880px) and (orientation: portrait)",
  // });
  return (
    <html lang="en">
      <body
        className={`${title.variable} ${body.variable} ${heading.variable}`}
      >
        <SkipLink href="#content" />
        <HeadroomWrapper className={styles.navBar}>
          <Link className="logo" href="/#about">
            <h1>J.T. Ziolo</h1>
          </Link>
          <div className={styles.navBarRight}>
            <Link className="nav" href="/#about">
              About Me
            </Link>
            <Link className="nav" href="/#projects">
              Projects
            </Link>
            <Link className="nav" href="/#contact">
              Contact Me
            </Link>
            <span className={styles.separator}></span>
            <ExternalLink href={devToUrl}>Blog</ExternalLink>
          </div>
        </HeadroomWrapper>
        {children}
        <footer className={styles.footer}>
          <div>
            <small>©2024 Telomeric Software LLC (DBA JT Ziolo)</small>
            <div className={styles.footerLinks}>
              <Link className="nav" href="./policies/#privacy">
                <small>Privacy Policy</small>
              </Link>
              <Link className="nav" href="./policies/#cookie">
                <small>Cookie Policy</small>
              </Link>
            </div>
          </div>
          {socialBarDark}
        </footer>
      </body>
    </html>
  );
}
