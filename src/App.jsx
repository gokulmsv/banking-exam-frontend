import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";
import AdminUpload from "./pages/AdminUpload";

function App() {
  const [page, setPage] = useState("dashboard");

  switch (page) {
    case "exam":
      return (
        <Exam
          goDashboard={() => setPage("dashboard")}
        />
      );

    case "admin":
      return (
        <AdminUpload goToDashboard={() => setPage("dashboard")} />
      );

    default:
      return (
        <Dashboard
          startTest={() => setPage("exam")}
          setPage={setPage}
        />
      );
  }
}

export default App;