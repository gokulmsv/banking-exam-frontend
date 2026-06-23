function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Banking Exam Simulator
        </h1>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold">
              Gokul
            </p>

            <p className="text-sm text-gray-500">
              Banking Aspirant
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            G
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;