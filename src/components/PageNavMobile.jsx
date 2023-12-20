import Button from "./Button";
import Icons from "./Icons";
import styles from "./PageNavMobile.module.css";
function PageNavMobile({ closeModalFunction, type }) {
  if (type === "navMobile")
    return (
      <nav className={styles.pageNav}>
        <ul className={styles.mainNavList}>
          <div className={styles.logoContainer}>
            <Icons id="logo-white" styles={styles.logo} />
            <div onClick={() => closeModalFunction()}>
              <Icons
                id="close"
                styles={styles.iconClose}
                logoCircle={styles.circle}
              />
            </div>
          </div>
          <li className={styles.mainNavLink}>Features</li>
          <li className={styles.mainNavLink}>Pricing</li>
          <li className={styles.mainNavLink}>Contact</li>
        </ul>
        <Button
          type="mobile-nav-btn"
          className={styles.mainNavBtn}
          additionalStyles={{ letterSpacing: "0.15rem" }}>
          Login
        </Button>
        <div className={styles.icons}>
          <Icons id="fb" styles={styles.iconColor} alt="Facebook logo" />
          <Icons id="twitter" styles={styles.iconColor} alt="Twitter logo" />
        </div>
      </nav>
    );
  if (type === "navMobileFooter")
    return (
      <nav className={styles.pageNavFooter}>
        <ul className={styles.mainNavList}>
          <Icons id="logo-white" styles={styles.logoTransform} />
          <li className={styles.mainNavLinkFooter}>Features</li>
          <li className={styles.mainNavLinkFooter}>Pricing</li>
          <li className={styles.mainNavLinkFooter}>Contact</li>
        </ul>
        <div className={styles.iconsFooter}>
          <Icons id="fb" styles={styles.iconColor} alt="Facebook logo" />
          <Icons id="twitter" styles={styles.iconColor} alt="Twitter logo" />
        </div>
      </nav>
    );
}

export default PageNavMobile;
