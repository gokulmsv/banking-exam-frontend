import { useState } from "react";
import { uploadQuestions } from "../services/adminApi";

export default function UploadBox() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Select Excel file");

    try {
      setLoading(true);
      const res = await uploadQuestions(file);
      setMsg(`Uploaded: ${res.count} questions`);
    } catch (err) {
      setMsg("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div class="max-w-md mx-auto mt-8">
        <label
          class="block mb-2 text-sm font-medium text-gray-700"
          for="file_input">
          Upload Profile Picture
        </label>
        <input
          id="file_input"
          type="file"
          class="block w-full text-sm text-gray-500 rounded-lg border border-gray-300 bg-gray-50 cursor-pointer focus:outline-none
           file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-semibold 
           file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p class="mt-1 text-xs text-gray-500">PNG, JPG, or GIF (Max 5MB).</p>
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
        }`}>
        {loading ? "⏳ Uploading..." : "📤 Upload Questions"}
      </button>

      <p>{msg}</p>
    </div>
  );
}
