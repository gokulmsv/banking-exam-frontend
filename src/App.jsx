import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";

function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <Exam />
  ) : (
    <Dashboard startTest={() => setStarted(true)} />
  );
}

export default App;