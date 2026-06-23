function QuestionPalette({
  questions,
  currentQuestion,
  setCurrentQuestion,
  answers,
  reviewQuestions,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="font-bold text-xl mb-5">
        Question Palette
      </h2>

      <div className="grid grid-cols-5 gap-3">
        {questions.map((q, index) => {
          const answered =
            answers[q.id] !==
            undefined;

          const review =
            reviewQuestions?.includes(
              q.id
            );

          return (
            <button
              key={q.id}
              onClick={() =>
                setCurrentQuestion(index)
              }
              className={`
                w-12
                h-12
                rounded-lg
                font-bold

                ${
                  currentQuestion ===
                  index
                    ? "ring-4 ring-blue-400"
                    : ""
                }

                ${
                  review
                    ? "bg-purple-600 text-white"
                    : answered
                    ? "bg-green-600 text-white"
                    : "bg-gray-300"
                }
              `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-green-600 rounded"></div>
          Answered
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-purple-600 rounded"></div>
          Review
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          Not Answered
        </div>
      </div>
    </div>
  );
}

export default QuestionPalette;