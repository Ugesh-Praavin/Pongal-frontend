import { useEffect, useState } from "react";
import { fetchQuestions, submitAnswers } from "../api/quiz.api";
import type { Question, Answer, OptionKey } from "../types/quiz.types";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";

export default function QuizPage({
  student,
  onFinish,
}: {
  student: any;
  onFinish: (r: any) => void;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  const handleSelect = async (option: OptionKey) => {
    const q = questions[index];

    // Build the complete answers array including current answer
    const currentAnswer = { questionId: q.id, selectedOption: option };
    const allAnswers = [...answers, currentAnswer];

    // Update state for next question
    setAnswers(allAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      // All questions answered - submit with complete answers array
      try {
        const result = await submitAnswers({
          student,
          answers: allAnswers,
        });
        onFinish(result);
      } catch (error: any) {
        // Handle 400 Bad Request and other errors gracefully
        if (error.response?.status === 400) {
          alert(
            "Please complete all questions. Some answers may be missing or invalid."
          );
        } else {
          alert("Failed to submit answers. Please try again.");
        }
        console.error("Error submitting answers:", error);
      }
    }
  };

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pongal-fire mb-4"></div>
          <p className="text-gray-600 font-medium">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-base font-semibold text-gray-700">
              Question {index + 1} of {questions.length}
            </p>
            <p className="text-sm font-medium text-gray-500">
              {Math.round(((index + 1) / questions.length) * 100)}% complete
            </p>
          </div>
          <ProgressBar current={index + 1} total={questions.length} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <QuestionCard question={questions[index]} onSelect={handleSelect} />
        </motion.div>
      </div>
    </div>
  );
}
