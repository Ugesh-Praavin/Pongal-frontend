import { useState } from "react";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import StudentInfoPage from "./pages/StudentInfoPage";

export default function App() {
  const [result, setResult] = useState<any>(null);
  const [student, setStudent] = useState<any>(null);

  if (!student) return <StudentInfoPage onNext={setStudent} />;
  if (!result) return <QuizPage student={student} onFinish={setResult} />;

  return (
    <div className="min-h-screen bg-gray-50 font-festive">
      <ResultPage result={result} />
    </div>
  );
}
