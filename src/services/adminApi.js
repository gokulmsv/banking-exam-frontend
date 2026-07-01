import axios from "axios";

const API = "http://localhost:5000/api/admin";

export const uploadQuestions = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API}/upload-questions`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};