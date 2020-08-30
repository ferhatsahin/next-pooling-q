import { useState } from "react";

import Layout from "../../components/Layout";
import QuestionDetail from "../../components/QuestionDetail";
import { fetcher, postOptions } from "../../helpers";

import styles from "./question-detail.module.scss";

export default function QuestionDetailPage({ question }) {
  const [voted, setVoted] = useState(false);
  const [data, setData] = useState(question);

  const updateChoice = choice => {
    const choices = [...data.choices];
    const updatedChoiceIndex = choices.findIndex( item => item.url === choice.url);

    choices[updatedChoiceIndex] = { ...choice };

    setData({ ...question, choices });
    setVoted(true);
  };

  const sendVoteRequest = async url => {
    try {
      const choice = await fetcher(url, postOptions);
      updateChoice(choice);
    } catch (error) {
      console.error(error);
      alert("Could not make vote request, please try again");
    }
  };

  return (
    <Layout>
      <div className={styles.detailPage}>
        <QuestionDetail
          questionDetail={data}
          sendVoteRequest={sendVoteRequest}
          voted={voted}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const question = await fetcher(`/questions/${id}`);
  return {
    props: { question }
  };
}
