import styles from "./Modal.module.css";

import Button from "./Button";
import Icons from "./Icons";

function Modal({ closeModal }) {
  return (
    <section className={styles.modal}>
      <div onClick={() => closeModal()}>
        <Icons id="close" styles={styles.icon} />
      </div>
      <div className={styles.tabContent}>
        <div className={`${styles.bgEl}`}>
          <img
            className={styles.featureImg}
            src="./public/illustration-features-tab-2.svg"
            alt="Streamlined and intuitive app interface for effortless organization"
          />
          <span className={styles.bg}></span>
        </div>
        <div className={styles.featuresDescription}>
          <h2 className="heading-secondary">Intelligent search</h2>
          <p className="heading-description">
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <Button type="primary">More info</Button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
