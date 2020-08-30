import Layout from "../components/Layout";
import QuestionList from "../components/QuestionList";
import AddQuestionButton from '../components/AddQuestionButton'
import { fetcher } from '../helpers'

export default function Home({questions}) {
  return (
    <Layout home>
      <AddQuestionButton/>
      <QuestionList questions={questions} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const questions = await fetcher('/questions')
  return { props : { questions } }
}
