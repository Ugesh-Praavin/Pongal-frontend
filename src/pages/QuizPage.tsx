import { useEffect, useState } from 'react';
import { fetchQuestions, submitAnswers } from '../api/quiz.api';
import type { Question, Answer, OptionKey } from '../types/quiz.types';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import { motion } from 'framer-motion';

export default function QuizPage({ student, onFinish }: { student: any; onFinish: (r: any) => void }) {
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
      const result = await submitAnswers({
  student,
  answers: [...answers, { questionId: q.id, selectedOption: option }],
});
      onFinish(result);
    }
  };

  if (!questions.length) return <p className="p-6">Loading…</p>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <p className="mb-2 text-sm text-gray-500">
        Question {index + 1} / {questions.length}
      </p>
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
> <QuestionCard question={questions[index]} onSelect={handleSelect} /></motion.div>
     
      <ProgressBar current={index + 1} total={questions.length} />

    </div>
  );
}
