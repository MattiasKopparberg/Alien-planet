import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-1">
      <img src={logo} alt="logo" className="w-20 h-20" />

      <div className="flex gap-2">
        <Link to="/">
          <button className="text-white px-8 py-1 rounded-xl cursor-pointer backdrop-blur-xs w-35 h-9.75 transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Home
          </button>
        </Link>
        <Link to="/planets">
          <button className="text-white px-8 py-1 rounded-xl cursor-pointer backdrop-blur-xs w-35 h-9.75 transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Planets
          </button>
        </Link>
        <Link to="/aliens">
          <button className="text-white px-8 py-1 rounded-xl cursor-pointer backdrop-blur-xs w-35 h-9.75 transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Aliens
          </button>
        </Link>
      </div>
    </nav>
  );
}
