
import { useForm, useFieldArray } from "react-hook-form";

import Layout from "../../components/Layout";
import QuestionForm from '../../components/QuestionForm'
import PreviewChoiceList from "../../components/PreviewChoiceList";

import styles from "./create-question.module.scss";

export default function CreateQuestion() {
  const { control, ...formControls } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "choices"
  });

  const removeChoice = index => remove(index);
  
  return (
    <Layout>
      <div className={styles.createQuestionContainer}>
       <QuestionForm
        fields={fields}
        append={append}
        {...formControls}
       />
        <PreviewChoiceList removeChoice={removeChoice} choiceList={fields} />
      </div>
    </Layout>
  );
}