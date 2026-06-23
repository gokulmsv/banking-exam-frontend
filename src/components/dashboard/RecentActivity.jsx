import {
  FaCheckCircle,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";

function RecentActivity() {
  const activities = [
    {
      icon: <FaCheckCircle />,
      title: "SBI Clerk Mock Test 3 Completed",
      time: "2 hours ago",
    },
    {
      icon: <FaChartLine />,
      title: "Accuracy improved by 4%",
      time: "Yesterday",
    },
    {
      icon: <FaBookOpen />,
      title: "Quantitative Aptitude Practice",
      time: "2 days ago",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-4"
          >
            <div className="text-green-600 text-xl">
              {activity.icon}
            </div>

            <div>
              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;