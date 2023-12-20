import Button from "../components/Button";
import styles from "./ExtensionPage.module.css";
function ExtensionPage() {
  return (
    <section className={styles.extensionPage}>
      <div className={styles.extensionContainer}>
        <h2 className="heading-secondary">Download the extension</h2>
        <p className="heading-description text-center">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className={styles.browserCards}>
        <div className={`${styles.browserPack} ${styles.pack_01}`}>
          <img
            className="browser-logo"
            src="../public/logo-chrome.svg"
            alt="Chrome browser logo"
          />
          <p className={styles.browserAdd}>Add to chrome</p>
          <span className={styles.browserInfo}>Minimum version 62</span>
          <img className={styles.dots} src="../public/bg-dots.svg" alt="dots" />
          <Button type="primary">Add & Install Extension</Button>
        </div>
        <div className={`${styles.browserPack} ${styles.pack_02}`}>
          <img
            className="browser-logo"
            src="../public/logo-firefox.svg"
            alt="Firefox browser logo"
          />
          <p className={styles.browserAdd}>Add to Firefox</p>
          <span className={styles.browserInfo}>Minimum version 55</span>
          <img className={styles.dots} src="../public/bg-dots.svg" alt="dots" />
          <Button type="primary">Add & Install Extension</Button>
        </div>
        <div className={`${styles.browserPack} ${styles.pack_03}`}>
          <img
            className="browser-logo"
            src="../public/logo-opera.svg"
            alt="Opera browser logo"
          />
          <p className={styles.browserAdd}>Add to Opera</p>
          <span className={styles.browserInfo}>Minimum version 46</span>
          <img className={styles.dots} src="../public/bg-dots.svg" alt="dots" />
          <Button type="primary">Add & Install Extension</Button>
        </div>
      </div>
    </section>
  );
}

export default ExtensionPage;
