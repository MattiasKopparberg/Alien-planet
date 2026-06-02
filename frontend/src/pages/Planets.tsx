import PlanetCard from "../components/planets/PlanetCard";
import List from "../components/List";
import { usePlanets } from "../hooks/usePlanets";
import "../App.css";

export default function Planets() {
  const { planets, error } = usePlanets();

  if (error) return <p>{error}</p>;

  return (
    <div className="text-light-blue flex-col justify-center align-center">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">
        Planets
      </h1>
      {/* renderItem skickas till List och skapar ett PlanetCard per planet-objekt */}
      <List
        items={planets}
        renderItem={(item) => <PlanetCard planet={item} />}
      />
    </div>
  );
}
