import { dateFormatter } from "../../helpers";

import styles from "./question-detail.module.scss";

function QuestionDetail({ questionDetail, sendVoteRequest, voted }) {
  const { question, published_at, choices } = questionDetail;
  const formattedDate = dateFormatter(published_at);

  return (
    <div className={styles.detailWrapper}>
      <h1>Q.{question}</h1>
      <h3>{formattedDate}</h3>
      {choices.map(({ choice, url, votes }) => (
        <div className={styles.option} key={url}>
          {choice}
          <button disabled={voted} onClick={() => sendVoteRequest(url)}>
            {!voted ? "Vote" : votes}
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuestionDetail;
