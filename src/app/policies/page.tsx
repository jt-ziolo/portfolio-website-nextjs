import CookiePolicy from "@/markdown/cookie-policy.mdx";
import PrivacyPolicy from "@/markdown/privacy-policy.mdx";

import styles from "../page.module.css";

export default function Policies() {
  // Page
  return (
    <div className={`${styles.sectionContainer} sideMargins`}>
      <section id="privacy">
        <h2>Privacy Policy</h2>
        <PrivacyPolicy />
      </section>
      <section id="cookie">
        <h2>Cookie Policy</h2>
        <CookiePolicy />
      </section>
    </div>
  );
}
