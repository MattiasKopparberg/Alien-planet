import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Aliens from "./pages/Aliens";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-space-blue min-h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/aliens" element={<Aliens />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
