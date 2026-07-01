import {
  FaHome,
  FaClipboardList,
  FaChartLine,
  FaBookOpen,
  FaCog,
  FaUpload,
} from "react-icons/fa";

function Sidebar({ setPage }) {
  const menuItems = [
    {
      icon: <FaHome />,
      name: "Dashboard",
      page: "dashboard",
    },
    {
      icon: <FaClipboardList />,
      name: "Mock Tests",
      page: "mock",
    },
    {
      icon: <FaChartLine />,
      name: "Analytics",
      page: "analytics",
    },
    {
      icon: <FaBookOpen />,
      name: "Practice",
      page: "practice",
    },
    {
      icon: <FaUpload />,
      name: "Admin Upload",
      page: "admin",
    },
    {
      icon: <FaCog />,
      name: "Settings",
      page: "settings",
    },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        🚀 BankPrep
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setPage(item.page)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;