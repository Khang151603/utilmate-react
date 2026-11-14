
interface Question {
    id: string;
    name: string;
    category: string;
}

type SubmissionStatus =
    | 'CORRECT'
    | 'INCORRECT'
    | 'PARTIALLY_CORRECT';

interface QuestionItemProps {
    question: Question;
    status?: SubmissionStatus;
}

function QuestionItem({ question, status }: QuestionItemProps) {

    let statusColor = 'bg-[#c9cdd2]';

    if (status === 'CORRECT') {
        statusColor = 'bg-[#2f812b]';
    } else if (status === 'INCORRECT') {
        statusColor = 'bg-[#ed3026]';
    } else if (status === 'PARTIALLY_CORRECT') {
        statusColor = 'bg-[#e8b52f]';
    }

    return (
        <li className="flex min-h-[66px] items-center gap-[10px] rounded-[7px] border border-[#dedfe2] bg-white px-[18px] py-4 text-base font-semibold shadow-[0_1px_2px_rgb(22_28_36_/_3%)] transition-[border-color,box-shadow,transform] duration-[140ms] ease-in-out hover:-translate-y-px hover:border-[#c5c9ce] hover:shadow-[0_5px_14px_rgb(22_28_36_/_7%)] motion-reduce:transition-none">

            <span
                className={`size-[15px] shrink-0 rounded-full ${statusColor}`}
                aria-hidden="true"
            />

            <span>{question.name}</span>

        </li>
    );
}

export default QuestionItem;
