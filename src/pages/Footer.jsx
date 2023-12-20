import styles from "./Footer.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import PageNavMobile from "../components/PageNavMobile";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [count, setCount] = useState(35000);

  const timeoutID = useRef(null);
  useEffect(() => {
    timeoutID.current = setTimeout(() => {
      if (count === 0) {
        clearTimeout(timeoutID.current);
        timeoutID.current = null;
        return;
      }
      setCount((value) => value - 4);
    }, 1);

    return () => clearTimeout(timeoutID.current);
  }, [count]);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    if (!isValidEmail(event.target.value)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.footerDescription}>
          <span className={styles.footerSpan}>{count}+ already joined</span>
          <p className={styles.footerTitle}>
            Stay up-to-date with what <br></br> we are doing
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email === "") setError("No email address");
          }}
          className={styles.footerForm}>
          <div className={styles.bg}>
            <input
              className={error ? styles.formError : ""}
              type="text"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {error && (
              <>
                <span className={styles.inputErr}>{error}</span>{" "}
                <img
                  className={styles.iconErr}
                  src="../public/icon-error.svg"></img>
              </>
            )}
          </div>
          <Button
            additionalStyles={{ boxShadow: "none" }}
            type="secondary--red">
            Contact us
          </Button>
        </form>
      </div>
      {window.matchMedia("(min-width: 44em)").matches ? (
        <PageNav type="footer" />
      ) : (
        <PageNavMobile type="navMobileFooter" />
      )}
    </footer>
  );
}

export default Footer;
