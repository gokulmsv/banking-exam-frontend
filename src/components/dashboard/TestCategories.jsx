import {
  FaUniversity,
  FaBook,
  FaChartBar,
  FaAward,
} from "react-icons/fa";

function TestCategories() {
  const categories = [
    {
      icon: <FaUniversity />,
      title: "SBI Clerk",
      tests: "120 Tests",
    },
    {
      icon: <FaBook />,
      title: "IBPS PO",
      tests: "95 Tests",
    },
    {
      icon: <FaChartBar />,
      title: "RRB PO",
      tests: "70 Tests",
    },
    {
      icon: <FaAward />,
      title: "RBI Assistant",
      tests: "50 Tests",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        Popular Categories
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
          >
            <div className="text-4xl text-blue-600 mb-4">
              {category.icon}
            </div>

            <h3 className="font-bold text-xl">
              {category.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {category.tests}
            </p>

            <button className="mt-4 text-blue-600 font-semibold">
              Explore →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestCategories;