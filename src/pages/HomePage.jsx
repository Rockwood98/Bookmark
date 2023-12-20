import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";
// import PageNavMobile from "../components/PageNavMobile";
import Button from "../components/Button";
import PageNavMobile from "../components/PageNavMobile";
import Icons from "../components/Icons";
import { useEffect, useState } from "react";

function HomePage({ openModal }) {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpenNav(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const closeModalFunction = () => {
    setOpenNav(false);
  };
  return (
    <div className={styles.homePage}>
      {window.matchMedia("(min-width: 44em)").matches ? (
        <PageNav type="home" />
      ) : (
        <>
          <div className={styles.mobileNav}>
            <Icons id="logo" />
            <div onClick={() => setOpenNav(!openNav)}>
              {!openNav && <Icons id="hamburger" styles={styles.hamburger} />}
            </div>
          </div>
          {openNav && (
            <PageNavMobile
              type="navMobile"
              closeModalFunction={closeModalFunction}
            />
          )}
        </>
      )}
      <section className={styles.sectionHero}>
        <div className={styles.heroTextBox}>
          <h1 className="heading-primary">A simple bookmark manager</h1>
          <p className="heading-description">
            {" "}
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className={styles.buttons}>
            {" "}
            <Button additionalStyles={{ marginRight: "1rem" }} type="primary">
              Get it on Chrome
            </Button>
            <Button type="secondary">Get it on Firefox</Button>
          </div>
        </div>
        <div className={styles.bgEl} onMouseEnter={() => openModal()}>
          <img
            className={styles.heroImg}
            src="../public/illustration-hero.svg"
            alt="Interacting with a website on a table"
          />
          <span className={styles.bg}></span>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
