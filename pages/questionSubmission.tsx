import type { NextPage } from 'next';
import Head from 'next/head';
import { QuestionForm } from '../components/questionForm';

const QuestionSubmission: NextPage = () => {
	return (
		<main>
			<Head>
				<title>Question Submission</title>
			</Head>
			<QuestionForm />
		</main>
	);
};

export default QuestionSubmission;
