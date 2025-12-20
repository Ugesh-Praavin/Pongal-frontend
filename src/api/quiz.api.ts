import axios from 'axios';

import type { Answer } from '../types/quiz.types';

const BASE_URL = 'https://pongal-backend.onrender.com';

export const fetchQuestions = async () => {
  const res = await axios.get(`${BASE_URL}/question/start`);
  return res.data;
};

export const submitAnswers = async (answers: Answer[]) => {
  const res = await axios.post(`${BASE_URL}/quiz/submit`, {
    answers,
  });
  return res.data;
};
