import { FaPlayCircle } from "react-icons/fa";

function QuickMockTests() {
  const tests = [
    "SBI Clerk Full Mock",
    "IBPS PO Full Mock",
    "RRB PO Full Mock",
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Quick Mock Tests
      </h2>

      <div className="space-y-4">
        {tests.map((test, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
          >
            <div>
              <h3 className="font-semibold">
                {test}
              </h3>

              <p className="text-gray-500 text-sm">
                Full Length Test
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              <FaPlayCircle className="inline mr-2" />
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickMockTests;