import { useState } from "react";
import { uploadQuestions } from "../services/adminApi";

export default function UploadBox() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file");
      return;
    }

    try {
      setLoading(true);
      setMsg("");

      const res = await uploadQuestions(file);

      setMsg(`✅ Successfully uploaded ${res.count} questions`);
      setFile(null);

      // Clear input after upload
      document.getElementById("file_input").value = "";
    } catch (err) {
      console.error(err);
      setMsg("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

      <h2 className="text-3xl font-bold text-blue-700 mb-2">
        Upload Questions
      </h2>

      <p className="text-gray-500 mb-6">
        Upload an Excel (.xlsx/.xls) file containing your questions.
      </p>

      <label
        htmlFor="file_input"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Select Excel File
      </label>

      <input
        id="file_input"
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => setFile(e.target.files[0])}
        className="block w-full text-sm text-gray-500 rounded-lg border border-gray-300 bg-gray-50 cursor-pointer
        file:mr-4 file:py-3 file:px-5 file:border-0
        file:rounded-lg file:bg-blue-100
        file:text-blue-700 file:font-semibold
        hover:file:bg-blue-200"
      />

      {file && (
        <div className="mt-4 bg-green-50 border border-green-300 rounded-lg p-3">
          <p className="text-green-700 font-medium">
            📄 {file.name}
          </p>

          <p className="text-sm text-gray-500">
            {(file.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-6 w-full py-3 rounded-xl text-lg font-semibold text-white transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
        }`}
      >
        {loading ? "⏳ Uploading..." : "📤 Upload Questions"}
      </button>

      {msg && (
        <div
          className={`mt-5 p-3 rounded-lg text-center font-semibold ${
            msg.includes("Successfully")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {msg}
        </div>
      )}
    </div>
  );
}