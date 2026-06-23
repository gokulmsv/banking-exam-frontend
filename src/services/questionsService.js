import axios from "axios";

// 👉 PUT YOUR REAL RENDER URL HERE
const BASE_URL = "https://banking-exam-backend.onrender.com/api";

export const fetchQuestions = async () => {
  const res = await axios.get(`${BASE_URL}/exam/questions`);
  return res.data;
};