import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import CounterApp from "./pages/CounterApp";
import TodoApp from "./pages/TodoApp";
import Login from "./componants/Login";

export default function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Routes>
        <Route path="/" element={<CounterApp />} />
        <Route path="/todoApp" element={<TodoApp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
