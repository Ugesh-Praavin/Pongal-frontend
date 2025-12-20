import type { Question, OptionKey } from '../types/quiz.types';

interface Props {
  question: Question;
  onSelect: (option: OptionKey) => void;
}

export default function QuestionCard({ question, onSelect }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>

      <div className="space-y-3">
        {(Object.keys(question.options) as OptionKey[]).map((key) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className="w-full text-left p-3 border rounded-lg hover:bg-orange-100 transition"
          >
            <span className="font-bold mr-2">{key}.</span>
            {question.options[key].text}
          </button>
        ))}
      </div>
    </div>
  );
}
