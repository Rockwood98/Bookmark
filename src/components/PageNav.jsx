import styles from "./PageNav.module.css";
import Button from "./Button.jsx";
import Icons from "./Icons.jsx";
function PageNav({ type }) {
  if (type === "home")
    return (
      <nav className={styles.pageNav}>
        <Icons id="logo" />
        <ul className={styles.mainNavList}>
          <li className={styles.mainNavLink}>Features</li>
          <li className={styles.mainNavLink}>Pricing</li>
          <li className={styles.mainNavLink}>Contact</li>
          <Button
            type="secondary--red"
            className={styles.mainNavLink}
            additionalStyles={{ letterSpacing: "0.15rem" }}>
            Login
          </Button>
        </ul>
      </nav>
    );
  if (type === "footer")
    return (
      <nav className={`${styles.pageNav} ${styles.footerBg}`}>
        <ul className={styles.mainNavList}>
          <Icons id="logo-white" />
          <li className={styles.mainNavLink}>Features</li>
          <li className={styles.mainNavLink}>Pricing</li>
          <li className={styles.mainNavLink}>Contact</li>
        </ul>
        <div className={styles.icons}>
          <Icons id="fb" styles={styles.iconColor} alt="Facebook logo" />
          <Icons id="twitter" styles={styles.iconColor} alt="Twitter logo" />
        </div>
      </nav>
    );
}

export default PageNav;
