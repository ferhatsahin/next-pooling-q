import Link from 'next/link'

import styles from "./question-button.module.scss";

function AddQuestionButton() {
  return (
    <div className={styles.addButtonWrapper}>
    <Link href="/create-question">
      <button> Add Question</button>
    </Link>
  </div>
  );
}

export default AddQuestionButton;
