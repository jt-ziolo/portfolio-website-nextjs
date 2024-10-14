import { socialBarData } from "@/social-info";
import { IconType } from "react-icons";

import SocialBtn from "../components/social-btn";
import styles from "./social-bar.module.css";

// Social buttons
export const socialBtnFactory = (
  url: string,
  linkAccessibleText: string,
  iconType: IconType,
  key?: string,
) => {
  return (
    <SocialBtn
      key={key}
      href={url}
      iconProps={{ className: styles.icon }}
      linkAccessibleText={linkAccessibleText}
      iconType={iconType}
    ></SocialBtn>
  );
};

const socialBarContents = (
  <>
    {socialBarData.map((item) => {
      return socialBtnFactory(
        item.url,
        item.linkAccessibleText,
        item.iconType,
        item.url,
      );
    })}
  </>
);
export const socialBarLight = (
  <div className={styles.iconBtnBar}>{socialBarContents}</div>
);
export const markInDarkContainer = (children: React.ReactNode) => (
  <div className="dark">{children}</div>
);
export const socialBarDark = markInDarkContainer(socialBarLight);
