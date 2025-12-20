import type { Question, OptionKey } from '../types/quiz.types';

interface Props {
  question: Question;
  onSelect: (option: OptionKey) => void;
}

export default function QuestionCard({ question, onSelect }: Props) {
  return (
    <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-orange-200">
  <h2 className="text-xl font-semibold mb-5 text-pongal-brown">
    {question.text}
  </h2>

  <div className="space-y-3">
    {(Object.keys(question.options) as OptionKey[]).map((key) => (
      <button
        key={key}
        onClick={() => onSelect(key)}
        className="w-full text-left p-4 rounded-xl border border-orange-200 
        hover:bg-pongal-yellow hover:text-white transition-all duration-300"
      >
        <span className="font-bold mr-2">{key}.</span>
        {question.options[key].text}
      </button>
    ))}
  </div>
</div>

  );
}
