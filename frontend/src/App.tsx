import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Aliens from "./pages/Aliens";
import "./App.css";

function App() {
  return (
    <div className="App">
    <nav className="flex-3">
      <Link to="/"><button>Home</button></Link>
      <Link to="/Planets"><button>Planets</button></Link>
      <Link to="/Aliens"><button>Aliens</button></Link>
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
