import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Aliens from "./pages/Aliens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/aliens" element={<Aliens />} />
    </Routes>
  );
}

export default App;
