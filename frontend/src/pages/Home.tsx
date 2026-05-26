import { Link } from "react-router-dom";
import "../App.css";
import heroImg from "../assets/images/hero-img.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-20"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}
    >
      <h1 className="text-light-purple text-4xl py-2">Alien Planets</h1>
      <h2 className="text-light-purple text-lg py-3">
        Some intro text, and some more text here.
      </h2>
      <div className="flex gap-5 m-5">
        <Link to="/Planets">
          <button className="bg-yellow text-space-purple px-15 py-3 text-xl font-semibold rounded-4xl cursor-pointer transition-all hover:opacity-70">
            Explore Planets
          </button>
        </Link>
        <Link to="/Aliens">
          <button className="bg-light-purple text-space-purple px-15 py-3 text-xl font-semibold rounded-4xl cursor-pointer transition-all hover:opacity-70">
            Explore Aliens
          </button>
        </Link>
      </div>
    </div>
  );
}
