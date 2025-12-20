import { useState } from 'react';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

export default function App() {
  const [result, setResult] = useState<any>(null);

  return result ? (
    <ResultPage result={result} />
  ) : (
    <QuizPage onFinish={setResult} />
  );
}
