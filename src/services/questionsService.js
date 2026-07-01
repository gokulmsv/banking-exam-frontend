import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchQuestions = async () => {
  const res = await axios.get(`${BASE_URL}/exam/questions`);
  return res.data;
};