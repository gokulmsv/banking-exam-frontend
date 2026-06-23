import { useState } from "react";

function Result({
  score,
  answers,
  questions,
}) {
  const [filter, setFilter] =
    useState("all");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [selectedQuestion, setSelectedQuestion] =
    useState(questions[0]);

  const attempted =
    Object.keys(answers).length;

  const correct = score;

  const wrong = attempted - correct;

  const unattempted =
    questions.length - attempted;

  const accuracy =
    attempted === 0
      ? 0
      : (
          (correct / attempted) *
          100
        ).toFixed(2);

  const filteredQuestions =
    questions.filter((q) => {
      const userAnswer = answers[q.id];

      const isCorrect =
        userAnswer === q.answer;

      const isAttempted =
        userAnswer !== undefined;

      if (filter === "correct")
        return isCorrect;

      if (filter === "wrong")
        return (
          isAttempted && !isCorrect
        );

      if (filter === "unattempted")
        return !isAttempted;

      return true;
    });

  const questionsPerPage = 12;

  const totalPages = Math.ceil(
    filteredQuestions.length /
      questionsPerPage
  );

  const startIndex =
    (currentPage - 1) *
    questionsPerPage;

  const currentQuestions =
    filteredQuestions.slice(
      startIndex,
      startIndex + questionsPerPage
    );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg mb-8">
          <h1 className="text-4xl font-bold">
            🎉 Test Completed
          </h1>

          <p className="mt-2 opacity-90">
            Review your performance and
            learn from mistakes.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-5 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              {questions.length}
            </h2>
            <p>Total</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h2 className="text-3xl font-bold text-green-600">
              {correct}
            </h2>
            <p>Correct</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h2 className="text-3xl font-bold text-red-600">
              {wrong}
            </h2>
            <p>Wrong</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h2 className="text-3xl font-bold text-yellow-600">
              {unattempted}
            </h2>
            <p>Unattempted</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h2 className="text-3xl font-bold text-purple-600">
              {accuracy}%
            </h2>
            <p>Accuracy</p>
          </div>

        </div>

        {/* Filter Buttons */}

        <div className="flex gap-3 mb-8">

          <button
            onClick={() => {
              setFilter("all");
              setCurrentPage(1);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            All
          </button>

          <button
            onClick={() => {
              setFilter("correct");
              setCurrentPage(1);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Correct
          </button>

          <button
            onClick={() => {
              setFilter("wrong");
              setCurrentPage(1);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Wrong
          </button>

          <button
            onClick={() => {
              setFilter("unattempted");
              setCurrentPage(1);
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Unattempted
          </button>

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-12 gap-6">

          {/* Question Grid */}

          <div className="col-span-4 bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-bold mb-4">
              Question Navigator
            </h2>

            <div className="grid grid-cols-4 gap-3">

              {currentQuestions.map(
                (q) => {
                  const userAnswer =
                    answers[q.id];

                  const isCorrect =
                    userAnswer === q.answer;

                  const isAttempted =
                    userAnswer !== undefined;

                  let color =
                    "bg-gray-300";

                  if (isCorrect)
                    color =
                      "bg-green-500 text-white";

                  else if (
                    isAttempted
                  )
                    color =
                      "bg-red-500 text-white";

                  return (
                    <button
                      key={q.id}
                      onClick={() =>
                        setSelectedQuestion(
                          q
                        )
                      }
                      className={`${color} h-12 rounded-lg font-bold hover:scale-105 transition`}
                    >
                      Q{q.id}
                    </button>
                  );
                }
              )}

            </div>

            {/* Pagination */}

            <div className="flex justify-center gap-2 mt-6 flex-wrap">

              <button
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  setCurrentPage(
                    currentPage - 1
                  )
                }
                className="px-3 py-2 bg-gray-200 rounded"
              >
                Prev
              </button>

              {Array.from(
                {
                  length: totalPages,
                },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() =>
                    setCurrentPage(
                      page
                    )
                  }
                  className={`px-3 py-2 rounded ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  setCurrentPage(
                    currentPage + 1
                  )
                }
                className="px-3 py-2 bg-gray-200 rounded"
              >
                Next
              </button>

            </div>

          </div>

          {/* Detail Panel */}

          <div className="col-span-8 bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
              Question Details
            </h2>

            <div className="mb-6">

              <h3 className="text-xl font-semibold mb-4">
                {selectedQuestion.question}
              </h3>

              <div className="space-y-3">

                <p>
                  <strong>
                    Your Answer:
                  </strong>{" "}
                  {answers[
                    selectedQuestion.id
                  ] !== undefined
                    ? selectedQuestion.options[
                        answers[
                          selectedQuestion.id
                        ]
                      ]
                    : "Not Attempted"}
                </p>

                <p className="text-green-700">
                  <strong>
                    Correct Answer:
                  </strong>{" "}
                  {
                    selectedQuestion
                      .options[
                      selectedQuestion.answer
                    ]
                  }
                </p>

              </div>

            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <h4 className="font-bold mb-2">
                Explanation
              </h4>

              <p className="text-gray-700">
                {
                  selectedQuestion.explanation
                }
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Result;