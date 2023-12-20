import styles from "./Button.module.css";

function Button({ onClick, type, children, additionalStyles }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
      style={additionalStyles}>
      {children}
    </button>
  );
}

export default Button;
