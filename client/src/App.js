import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<DashBoard />} path="/dashboard" />
      </Routes>
    </div>
  );
}

export default App;
