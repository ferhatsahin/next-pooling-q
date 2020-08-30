import QuestionCard from "../QuestionCard";

import styles from "./question-list.module.scss";

function QuestionList({ questions }) {
  return (
    <div className={styles.qlistWrapper}>
      {questions.map(question => (
        <QuestionCard key={question.url} {...question} />
      ))}
    </div>
  );
}

export default QuestionList;
