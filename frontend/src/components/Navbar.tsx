import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-1">
      <Link to="/">
        <img src={logo} alt="logo" className="w-20 h-20" />
      </Link>

      <button
        onClick={toggleMenu}
        className="lg:hidden text-light-blue cursor-pointer"
      >
        <RxHamburgerMenu size={24} />
      </button>

      <div className="hidden lg:flex gap-2">
        <Link to="/">
          <button className="font-subheading text-sm text-light-blue text-center p-2 rounded-xl cursor-pointer backdrop-blur-xs w-37 transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Home
          </button>
        </Link>
        <Link to="/planets">
          <button className="font-subheading text-sm text-light-blue text-center p-2 rounded-xl cursor-pointer backdrop-blur-xs w-37 transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Planets
          </button>
        </Link>
        <Link to="/aliens">
          <button className="font-subheading text-sm text-light-blue text-center p-2 rounded-xl cursor-pointer backdrop-blur-xs w-37 transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Aliens
          </button>
        </Link>
      </div>

      {/* mobile menu: shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 flex flex-col items-center gap-2 p-4 backdrop-blur-md bg-space-blue/90">
          <Link to="/" onClick={toggleMenu}>
            <button className="font-subheading text-sm text-light-blue text-center p-2 rounded-xl cursor-pointer w-37 uppercase font-semibold border border-[rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] transition-all">
              Home
            </button>
          </Link>
          <Link to="/planets" onClick={toggleMenu}>
            <button className="font-subheading text-sm text-light-blue text-center p-2 rounded-xl cursor-pointer w-37 uppercase font-semibold border border-[rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] transition-all">
              Planets
            </button>
          </Link>
          <Link to="/aliens" onClick={toggleMenu}>
            <button className="font-subheading text-sm text-light-blue text-center p-2 rounded-xl cursor-pointer w-37 uppercase font-semibold border border-[rgba(255,255,255,0.15)] hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] transition-all">
              Aliens
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
