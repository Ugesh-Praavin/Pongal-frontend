import { useState, useEffect } from "react";
import type { Question, OptionKey } from "../types/quiz.types";

interface Props {
  question: Question;
  onSelect: (option: OptionKey) => void;
}

export default function QuestionCard({ question, onSelect }: Props) {
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);

  // Reset selection when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [question.id]);

  const handleClick = (option: OptionKey) => {
    setSelectedOption(option);
    // Small delay to show selection before moving to next question
    setTimeout(() => {
      onSelect(option);
    }, 150);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 leading-relaxed">
        {question.text}
      </h2>

      <div className="space-y-3">
        {(Object.keys(question.options) as OptionKey[]).map((key) => {
          const isSelected = selectedOption === key;
          return (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pongal-fire focus:ring-offset-2 ${
                isSelected
                  ? "border-pongal-fire bg-orange-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-pongal-fire hover:bg-orange-50 hover:shadow-sm"
              }`}
            >
              <span
                className={`font-bold mr-3 ${
                  isSelected ? "text-pongal-fire" : "text-gray-700"
                }`}
              >
                {key}.
              </span>
              <span
                className={isSelected ? "text-gray-900 font-medium" : "text-gray-800"}
              >
                {question.options[key].text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
