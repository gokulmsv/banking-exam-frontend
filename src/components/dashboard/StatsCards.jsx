import {
  FaClipboardList,
  FaBullseye,
  FaFire,
  FaTrophy,
} from "react-icons/fa";

function StatsCards() {
  const stats = [
    {
      icon: <FaClipboardList />,
      title: "Tests Attempted",
      value: "25",
    },
    {
      icon: <FaBullseye />,
      title: "Accuracy",
      value: "82%",
    },
    {
      icon: <FaFire />,
      title: "Study Streak",
      value: "14 Days",
    },
    {
      icon: <FaTrophy />,
      title: "Rank",
      value: "128",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
        >
          <div className="text-3xl mb-4 text-blue-600">
            {item.icon}
          </div>

          <h3 className="text-gray-500">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;