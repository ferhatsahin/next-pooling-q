import Link from 'next/link'

import Layout from "../components/Layout";
import QuestionList from "../components/QuestionList";

import { mockedData } from "../mocked";

export default function Home() {
  return (
    <Layout home>
      <Link href="/create-question">
        <button> Add Question</button>
      </Link>
      <QuestionList questions={mockedData} />
    </Layout>
  );
}
