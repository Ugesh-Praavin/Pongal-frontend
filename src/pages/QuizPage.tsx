import { useEffect, useState } from 'react';
import { fetchQuestions, submitAnswers } from '../api/quiz.api';
import type { Question, Answer, OptionKey } from '../types/quiz.types';
import QuestionCard from '../components/QuestionCard';

export default function QuizPage({ onFinish }: { onFinish: (r: any) => void }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  const handleSelect = async (option: OptionKey) => {
    const q = questions[index];

    setAnswers([...answers, { questionId: q.id, selectedOption: option }]);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const result = await submitAnswers([...answers, {
        questionId: q.id,
        selectedOption: option,
      }]);
      onFinish(result);
    }
  };

  if (!questions.length) return <p className="p-6">Loading…</p>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <p className="mb-2 text-sm text-gray-500">
        Question {index + 1} / {questions.length}
      </p>
      <QuestionCard question={questions[index]} onSelect={handleSelect} />
    </div>
  );
}
