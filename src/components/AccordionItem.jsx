import { useState } from "react";
import styles from "./AccordionItem.module.css";
function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const Arrow = ({ type }) => (
    <svg
      className={styles[type]}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#5267DF"
      width="18"
      height="12">
      <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
    </svg>
  );

  return (
    <div className={styles.accordionComponent}>
      <div className={styles.accordionTitle} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.title}>{title}</p>

        {<Arrow type={isOpen ? "close" : "open"} />}
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}

export default AccordionItem;
