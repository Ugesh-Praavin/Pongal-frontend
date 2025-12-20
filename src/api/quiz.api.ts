import axios from 'axios';



const BASE_URL = 'https://pongal-backend.onrender.com';

export const fetchQuestions = async () => {
  const res = await axios.get(`${BASE_URL}/question/start`);
  return res.data;
};

export const submitAnswers = async (payload: any) => {
  const res = await axios.post(`${BASE_URL}/quiz/submit`, payload);
  return res.data;
};

