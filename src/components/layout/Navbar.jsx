import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Track your banking exam preparation
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <FaBell size={20} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div>
            <h4 className="font-semibold">
              Gokul
            </h4>

            <p className="text-sm text-gray-500">
              Banking Aspirant
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            G
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;