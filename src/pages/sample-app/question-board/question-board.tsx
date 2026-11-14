
import { dataQuestions } from './data/data-questions';
import { dataSubmissions } from './data/data-submissions';
import QuestionCategory from './components/question-category';

const categories = ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'];

function QuestionBoard() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-[clamp(20px,4vw,56px)] pt-8 pb-14 text-[#17191c] max-[680px]:pt-6">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-start gap-x-7 gap-y-8 max-[680px]:gap-[26px]">

          {categories.map((category) => {

            const questions = dataQuestions.filter((question) => {
              return question.category === category;
            });

            return (
              <QuestionCategory
                key={category}
                category={category}
                questions={questions}
                submissions={dataSubmissions}
              />
            );
          })}

        </div>
      </div>
    </main>
  );
}

export default QuestionBoard;
