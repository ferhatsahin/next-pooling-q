import Link from 'next/link'

import Layout from "../components/Layout";
import QuestionList from "../components/QuestionList";
import { fetcher } from '../helpers'

export default function Home({questions}) {
  return (
    <Layout home>
      <Link href="/create-question">
        <button> Add Question</button>
      </Link>
      <QuestionList questions={questions} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const questions = await fetcher('/questions')
  return { props : { questions } }
}
