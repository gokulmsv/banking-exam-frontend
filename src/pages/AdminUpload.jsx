import UploadBox from "../components/UploadBox";

export default function AdminUpload() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-700 text-white p-8">
          <h1 className="text-4xl font-bold">
            Banking Exam Admin Panel
          </h1>

          <p className="mt-2 text-blue-100">
            Upload Excel files to add questions into the database.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 p-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 ">
              📁 Upload Questions
            </h2>

            <UploadBox />
          </div>

          {/* Right */}
          <div className="space-y-5">

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                Supported Format
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>✅ .xlsx Excel File</li>
                <li>✅ Multiple Questions</li>
                <li>✅ Automatic Database Import</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                Required Columns
              </h3>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>subject</div>
                <div>topic</div>
                <div>question_no</div>
                <div>question</div>
                <div>option_a</div>
                <div>option_b</div>
                <div>option_c</div>
                <div>option_d</div>
                <div>option_e</div>
                <div>correct_answer</div>
                <div>explanation</div>
                <div>difficulty</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                ⚠ Before Upload
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Ensure column names match exactly.</li>
                <li>• Correct answers should be A, B, C, D or E.</li>
                <li>• Save the file as .xlsx.</li>
                <li>• Upload only one file at a time.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}