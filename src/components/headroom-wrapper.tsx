"use client";

import MediaQuery from "@/lib/media-query";
import {
  isDesktopQuery,
  isMobileOrTabletQuery,
} from "@/lib/responsive-breakpoints";
import { devToUrl } from "@/social-info";
import Link from "next/link";
import { useState } from "react";
import Headroom from "react-headroom";
import { ReactHeadroomProps } from "react-headroom";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import ExternalLink from "./external-link";
import styles from "./headroom-wrapper.module.css";

type ComponentProps = Omit<ReactHeadroomProps, "children"> & {
  children?: React.ReactNode;
};

const HeadroomWrapper = ({ children, ...headroomProps }: ComponentProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenuButtonClick(event: any): void {
    setIsMenuVisible((_) => !isMenuVisible);
  }

  function handleNavLinkClick(event: any): void {
    setIsMenuVisible((_) => false);
  }

  const navBarClassName = `${styles.navBar}`;

  return (
    <Headroom {...headroomProps} className={navBarClassName}>
      <Link className="logo" href="/#about" scroll={false}>
        <h1>J.T. Ziolo</h1>
      </Link>
      <MediaQuery query={isMobileOrTabletQuery}>
        <button onClick={handleMenuButtonClick}>
          <span>
            <FaBars />
          </span>
        </button>
      </MediaQuery>
      <ul data-visible={isMenuVisible}>
        <li>
          <Link
            onClick={handleNavLinkClick}
            className="nav"
            href="/#about"
            scroll={false}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={handleNavLinkClick}
            className="nav"
            href="/#projects"
            scroll={false}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={handleNavLinkClick}
            className="nav"
            href="/#contact"
            scroll={false}
          >
            Contact Me
          </Link>
        </li>
        <span className={styles.separator}></span>
        <li>
          <ExternalLink href={devToUrl} className="nav">
            Blog
          </ExternalLink>
        </li>
      </ul>
      {children}
    </Headroom>
  );
};

export default HeadroomWrapper;
