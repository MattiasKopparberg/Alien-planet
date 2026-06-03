import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";
import heroImg from "../assets/images/hero-img.jpg";

export default function Home() {
  //The useEffect below is there to trigger the sleeping free tier backend on mount
  useEffect(() => {
    fetch("https://alienplanet.onrender.com/api/").catch((error) =>
      console.error("Failed to wake up server:", error),
    );
  }, []);
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-black/20 px-6 overflow-x-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}>
      {/* glass box */}
      <div className="relative z-10 flex flex-col items-center backdrop-blur-sm bg-white/3 border border-white/10 rounded-2xl px-4 sm:px-10 py-8 w-full max-w-3xl text-center mx-auto">
        <h1 className="font-heading heading-alien text-magenta text-4xl sm:text-5xl lg:text-6xl py-2">
          Alien Planets
        </h1>
        <h2 className="font-paragraph text-light-blue text-base sm:text-lg py-3 text-center">
          Embark on an interstellar journey across the cosmos. This platform
          lets you touch down on distant planets, scan their unique
          environments, and catalog the fascinating civilizations and creatures
          that call them home. Step into the shoes of a space explorer and begin
          your deep-space discovery.
        </h2>
        <div className="flex flex-col md:flex-row gap-5 m-5 w-full max-w-sm md:max-w-none items-center justify-center">
          <Link to="/Planets" className="w-full md:w-auto">
            <button className="w-full font-subheading text-light-blue text-center md:w-xs p-2 rounded-xl cursor-pointer backdrop-blur-xs transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
              Explore Planets
            </button>
          </Link>
          <Link to="/Aliens" className="w-full md:w-auto">
            <button className="w-full font-subheading text-light-blue text-center md:w-2xs p-2 rounded-xl cursor-pointer backdrop-blur-xs transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
              Explore Aliens
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
