import { useState, useEffect } from "react";

import Timer from "../components/exam/Timer";
import QuestionPalette from "../components/exam/QuestionPalette";
import QuestionCard from "../components/exam/QuestionCard";
import Result from "./Result";

import { fetchQuestions } from "../services/questionsService";

function Exam() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(true);

  // 🔥 Load Firebase questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);

        const data = await fetchQuestions();

        console.log("QUESTIONS FROM API:", data);

        setQuestions(data || []);
      } catch (error) {
        console.error("Error loading questions:", error);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  // 🔥 Safe loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading questions...
      </div>
    );
  }

  // 🔥 No questions safety
  if (!questions.length) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        No questions found in database
      </div>
    );
  }

  const handleSelect = (optionIndex) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: optionIndex,
    });
  };

  const handleReview = () => {
    const currentId = questions[currentQuestion].id;

    if (!reviewQuestions.includes(currentId)) {
      setReviewQuestions([...reviewQuestions, currentId]);
    }
  };

  const clearResponse = () => {
    const currentId = questions[currentQuestion].id;

    const updated = { ...answers };
    delete updated[currentId];

    setAnswers(updated);
  };

  const calculateScore = () => {
    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    return score;
  };

  if (submitted) {
    return (
      <Result
        score={calculateScore()}
        answers={answers}
        questions={questions}
      />
    );
  }

  const attemptedCount = Object.keys(answers).length;
  const reviewCount = reviewQuestions.length;
  const remainingCount = questions.length - attemptedCount;

  const progress = Math.round((attemptedCount / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-700">
            Banking Mock Test
          </h1>

          <Timer duration={300} onTimeUp={() => setSubmitted(true)} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="bg-green-100 p-4 rounded-xl text-center">
            <h2 className="text-2xl font-bold">{attemptedCount}</h2>
            <p>Attempted</p>
          </div>

          <div className="bg-red-100 p-4 rounded-xl text-center">
            <h2 className="text-2xl font-bold">{remainingCount}</h2>
            <p>Remaining</p>
          </div>

          <div className="bg-purple-100 p-4 rounded-xl text-center">
            <h2 className="text-2xl font-bold">{reviewCount}</h2>
            <p>Review</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-xl text-center">
            <h2 className="text-2xl font-bold">{questions.length}</h2>
            <p>Total</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-600 h-3 rounded-full"
              style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-4 gap-5 p-6">
        {/* Question */}
        <div className="col-span-3 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-6">
            Question {currentQuestion + 1} of {questions.length}
          </h3>

          <QuestionCard
            question={questions[currentQuestion]}
            selectedAnswer={answers[questions[currentQuestion]?.id]}
            onSelect={handleSelect}
          />

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() =>
                setCurrentQuestion(Math.max(currentQuestion - 1, 0))
              }
              className="bg-gray-600 text-white px-5 py-2 rounded-lg">
              Previous
            </button>

            <button
              onClick={handleReview}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg">
              Mark Review
            </button>

            <button
              onClick={clearResponse}
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg">
              Clear Response
            </button>

            <button
              onClick={() =>
                setCurrentQuestion(
                  Math.min(currentQuestion + 1, questions.length - 1),
                )
              }
              className="bg-green-600 text-white px-5 py-2 rounded-lg">
              Save & Next
            </button>

            <button
              onClick={() => setSubmitted(true)}
              className="bg-red-600 text-white px-5 py-2 rounded-lg">
              Submit Test
            </button>
          </div>
        </div>

        {/* Palette */}
        <QuestionPalette
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
          reviewQuestions={reviewQuestions}
        />
      </div>
    </div>
  );
}

export default Exam;
