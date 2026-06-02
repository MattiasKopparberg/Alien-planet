import { Link } from "react-router-dom";
import "../App.css";
import heroImg from "../assets/images/hero-img.jpg";
import AlienModal from "../components/AlienModal";
import PlanetModal from "../components/PlanetModal";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-20"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}
    >
      <h1 className="font-heading text-magenta text-7xl py-2">Alien Planets</h1>
      <h2 className="font-paragraph text-light-blue text-lg py-3 text-center w-4xl">
        Embark on an interstellar journey across the cosmos. This platform lets
        you touch down on distant planets, scan their unique environments, and
        catalog the fascinating civilizations and creatures that call them home.
        Step into the shoes of a space explorer and begin your deep-space
        discovery.
      </h2>
      <div className="flex gap-5 m-5">
        <Link to="/Planets">
          <button className="font-subheading text-light-blue text-center w-xs p-2 rounded-xl cursor-pointer backdrop-blur-xs transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Explore Planets
          </button>
        </Link>
        <Link to="/Aliens">
          <button className="font-subheading text-light-blue text-center w-2xs p-2 rounded-xl cursor-pointer backdrop-blur-xs transition-all hover:shadow-[0_0_15px_rgba(160,90,216,0.6)] uppercase font-semibold bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
            Explore Aliens
          </button>
        </Link>
      </div>
      <AlienModal />
      <PlanetModal />
    </div>
  );
}
