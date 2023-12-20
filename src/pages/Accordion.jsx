import styles from "./Accordion.module.css";
import AccordionItem from "../components/AccordionItem";

function Accordion() {
  const accordionData = [
    {
      title: "What is Bookmark?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate explicabo iste saepe dolores! Amet facilis rem eos quas non ipsam. In ipsum velit officia quisquam. Voluptatem nisi minima repudiandae ad.",
    },
    {
      title: "How can i request a new browser?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate explicabo iste saepe dolores! Amet facilis rem eos quas non ipsam. In ipsum velit officia quisquam. Voluptatem nisi minima repudiandae ad.",
    },
    {
      title: "Is there a mobile app?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate explicabo iste saepe dolores! Amet facilis rem eos quas non ipsam. In ipsum velit officia quisquam. Voluptatem nisi minima repudiandae ad.",
    },
    {
      title: "What about other Chromium browsers?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate explicabo iste saepe dolores! Amet facilis rem eos quas non ipsam. In ipsum velit officia quisquam. Voluptatem nisi minima repudiandae ad.",
    },
  ];

  return (
    <section className={styles.accordion}>
      <div className={styles.accordionContainer}>
        <h2 className="heading-secondary">Frequently Asked Questions</h2>
        <p className="heading-description text-center">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className={styles.accordionItem}>
        {accordionData.map(({ title, content }) => (
          <AccordionItem title={title} content={content} key={title} />
        ))}
      </div>
    </section>
  );
}

export default Accordion;
