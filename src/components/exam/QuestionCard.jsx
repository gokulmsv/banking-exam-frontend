function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}) {
  if (!question) return null;

  const options = [
    question.option_a,
    question.option_b,
    question.option_c,
    question.option_d,
    question.option_e,
  ].filter(Boolean);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">
        {question.question}
      </h2>

      <div className="space-y-4">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all ${
              selectedAnswer === index
                ? "bg-blue-100 border-blue-500"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              checked={selectedAnswer === index}
              onChange={() => onSelect(index)}
              className="mr-4"
            />

            <span className="font-bold mr-3">
              {String.fromCharCode(65 + index)}.
            </span>

            <span className="text-lg">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;