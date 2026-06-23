function NavigationBar({
  previousQuestion,
  nextQuestion,
  submitTest,
}) {
  return (
    <div className="flex gap-3 mt-8">
      <button
        onClick={previousQuestion}
        className="bg-gray-500 text-white px-5 py-3 rounded-lg"
      >
        Previous
      </button>

      <button
        onClick={nextQuestion}
        className="bg-green-600 text-white px-5 py-3 rounded-lg"
      >
        Save & Next
      </button>

      <button
        onClick={submitTest}
        className="bg-red-600 text-white px-5 py-3 rounded-lg"
      >
        Submit Test
      </button>
    </div>
  );
}

export default NavigationBar;