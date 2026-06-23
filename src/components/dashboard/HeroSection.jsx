import { FaPlayCircle, FaChartLine } from "react-icons/fa";

function HeroSection({ startTest }) {
  return (
    <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Welcome Back, Gokul 🚀
          </h1>

          <p className="text-lg opacity-90">
            Continue your banking preparation journey and
            achieve your dream job.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={startTest}
              className="bg-white text-blue-600 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              <FaPlayCircle className="inline mr-2" />
              Start Practice
            </button>

            <button className="bg-blue-500 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
              <FaChartLine className="inline mr-2" />
              View Analytics
            </button>
          </div>
        </div>

        <div className="hidden lg:block text-8xl">
          📚
        </div>
      </div>
    </div>
  );
}

export default HeroSection;