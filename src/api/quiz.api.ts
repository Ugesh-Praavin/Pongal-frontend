import axios from "axios";

const BASE_URL = "https://pongal-backend.onrender.com";
// const BASE_URL = "http://localhost:3000";/

export const fetchQuestions = async () => {
  const res = await axios.get(`${BASE_URL}/question/start`);
  return res.data;
};

export const submitStudentDetails = async (student: {
  name: string;
  registerNo: string;
  department: string;
  section: string;
  year: string;
}) => {
  // Best-effort save - don't block UI if this fails
  try {
    await axios.post(`${BASE_URL}/sheets/student`, {
      name: student.name,
      registerNo: student.registerNo,
      department: student.department,
      section: student.section,
      year: student.year,
    });
  } catch (error) {
    // Silently fail - this is a best-effort save
    console.error("Failed to save student details:", error);
  }
};

export const submitAnswers = async (payload: any) => {
  // Format payload to match backend DTO exactly:
  // - Ensure questionId is a number
  // - Ensure selectedOption is uppercase ('A' | 'B' | 'C' | 'D')
  const formattedPayload = {
    student: payload.student,
    answers: payload.answers.map((answer: any) => ({
      questionId: Number(answer.questionId),
      selectedOption: String(answer.selectedOption).toUpperCase() as
        | "A"
        | "B"
        | "C"
        | "D",
    })),
  };

  const res = await axios.post(`${BASE_URL}/quiz/submit`, formattedPayload);
  return res.data;
};
