import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Aliens from "./pages/Aliens";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full bg-space-purple">
    <nav className="flex gap-2 justify-center p-5">
      <Link to="/"><button className="bg-space-lighter text-light-purple px-10 py-1 text-md rounded-md cursor-pointer transition-all hover:opacity-70">Home</button></Link>
      <Link to="/Planets"><button className="bg-space-lighter text-light-purple px-10 py-1 text-md rounded-md cursor-pointer transition-all hover:opacity-70">Planets</button></Link>
      <Link to="/Aliens"><button className="bg-space-lighter text-light-purple px-10 py-1 text-md rounded-md cursor-pointer transition-all hover:opacity-70">Aliens</button></Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/aliens" element={<Aliens />} />
    </Routes>
    </div>
  );
}

export default App;
