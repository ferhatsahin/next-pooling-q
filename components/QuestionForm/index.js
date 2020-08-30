import { useState } from "react";
import { useRouter } from "next/router";

import { fetcher, postOptions } from "../../helpers";

import styles from "./question-form.module.scss";

function QuestionForm(props) {
  const [choice, setChoice] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const { fields, register, errors, append, handleSubmit } = props;

  const submitButtonDisabled = submitted || errors.length > 0;
  const btnText = submitted ? "Please wait..." : "Create";

  const onSubmit = async ({ question }) => {
    const choices = fields.map(item => item.choice);
    setSubmitted(true);

    try {
      await fetcher("/questions", {
        ...postOptions,
        body: JSON.stringify({ question, choices })
      });
      router.push("/");
    } catch (error) {
      console.error(error);
      alert(`Couldn't create question. Please try again`);
    } finally {
      setSubmitted(false);
    }
  };

  const handleChoiceInputChange = e => {
    const { value } = e.target;
    setChoice(value);
  };

  const addChoiceToList = () => {
    if (choice) {
      append({ choice });
      setChoice("");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="question">Question</label>
      <div className={[styles.formItem, styles.formColumn]}>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Enter your question"
          ref={register({ required: "required" })}
        />
        {errors.question && (
          <div className={styles.formError}>Please enter question</div>
        )}
      </div>
      <label htmlFor="choice">Choice</label>
      <div className={styles.formItem}>
        <input
          type="text"
          id="choice"
          placeholder="Enter your choice"
          onChange={handleChoiceInputChange}
          value={choice}
        />
        <button type="button" onClick={addChoiceToList}>
          +
        </button>
      </div>
      <button disabled={submitButtonDisabled} type="submit">
        {btnText}
      </button>
    </form>
  );
}

export default QuestionForm;
