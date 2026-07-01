import UploadBox from "../components/UploadBox";

export default function AdminUpload({ goToDashboard }) {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Admin Upload
            </h1>

            <p className="text-gray-500 mt-2">
              Upload Excel files to add questions to your database.
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={goToDashboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <UploadBox />
        </div>

      </div>
    </div>
  );
}