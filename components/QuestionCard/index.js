import Link from "next/link";

import { dateFormatter } from "../../helpers";

import styles from "./question-card.module.scss";

function QuestionCard({ url, published_at, question, choices }) {
  const formattedDate = dateFormatter(published_at);
  return (
    <Link href="/questions/[id]" as={url}>
      <div className={styles.boxContainer}>
        <h1>{question}</h1>
        <div className={styles.cardFooter}>
          <h3>Posted: {formattedDate}</h3>
          <h2>
            Number of choices: <span>{choices.length}</span>
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default QuestionCard;
