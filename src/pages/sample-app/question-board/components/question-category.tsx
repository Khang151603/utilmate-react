
import QuestionItem from './question-item';

interface Question {
    id: string;
    name: string;
    category: string;
}

interface Submission {
    questionId: string;
    status: 'CORRECT' | 'INCORRECT' | 'PARTIALLY_CORRECT';
}

interface QuestionCategoryProps {
    category: string;
    questions: Question[];
    submissions: readonly Submission[];
}

function QuestionCategory({ category, questions, submissions }: QuestionCategoryProps) {
    return (
        <section className="min-w-0" aria-label={`${category} questions`}>

            <h2 className="mt-0 mb-[18px] text-[17px] font-semibold tracking-[0.015em]">
                {category}
            </h2>

            <ul className="m-0 grid list-none gap-[14px] p-0">

                {questions.map((question) => {

                    const submission = submissions.find(
                        (item) => item.questionId === question.id
                    );

                    return (
                        <QuestionItem
                            key={question.id}
                            question={question}
                            status={submission?.status}
                        />
                    );
                })}

            </ul>
        </section>
    );
}

export default QuestionCategory;
