import { useState } from "react";
import Button from "../components/Button";
import styles from "./FeaturesPage.module.css";
function FeaturesPage() {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2 className="heading-secondary">Features</h2>
        <p className="heading-description text-center">
          {" "}
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className={styles.tabFeatures}>
        <ul className={styles.tabTitles}>
          <li
            className={`${styles.tabHeading} ${
              toggle === 1 ? styles.active : ""
            }`}
            onClick={() => updateToggle(1)}>
            Simple Bookmarking
          </li>
          <li
            className={`${styles.tabHeading} ${
              toggle === 2 ? styles.active : ""
            }`}
            onClick={() => updateToggle(2)}>
            Speedy Searching
          </li>
          <li
            className={`${styles.tabHeading} ${
              toggle === 3 ? styles.active : ""
            }`}
            onClick={() => updateToggle(3)}>
            Easy Sharing
          </li>
        </ul>
        <div
          className={`${styles.line} ${toggle === 1 && styles.line_01} ${
            toggle === 2 && styles.line_02
          } ${toggle === 3 && styles.line_03}`}></div>
        {toggle === 1 && (
          <div className={styles.tabContent}>
            <div className={styles.bgEl}>
              <img
                className={styles.featureImg}
                src="./public/illustration-features-tab-1.svg"
                alt="Streamlined and intuitive app interface for effortless organization"
              />
              <span className={styles.bg}></span>
            </div>
            <div className={styles.featuresDescription}>
              <h2 className="heading-secondary">Bookmark in one click</h2>
              <p className="heading-description">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <Button type="primary">More info</Button>
            </div>
          </div>
        )}
        {toggle === 2 && (
          <div className={styles.tabContent}>
            <div className={`${styles.bgEl} ${styles.bg_correct}`}>
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
        )}
        {toggle === 3 && (
          <div className={styles.tabContent}>
            <div className={`${styles.bgEl} ${styles.bg_correct}`}>
              <img
                className={styles.featureImg}
                src="./public/illustration-features-tab-3.svg"
                alt="Streamlined and intuitive app interface for effortless organization"
              />
              <span className={styles.bg}></span>
            </div>
            <div className={styles.featuresDescription}>
              <h2 className="heading-secondary">Share your bookmarks</h2>
              <p className="heading-description">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button
              </p>
              <Button type="primary">More info</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturesPage;
