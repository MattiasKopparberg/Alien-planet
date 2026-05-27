import PlanetCard from "../components/planets/PlanetCard";
import List from "../components/List";
import type { Planet } from "../types/types";
import "../App.css";

const mockDataPlanets: Planet[] = [
  {
    planet_id: 1,
    name: "Mars",
    surface_area: 144798500,
    avg_temp: -60,
  },
  {
    planet_id: 2,
    name: "Venus",
    surface_area: 460200000,
    avg_temp: 464,
  },
];

export default function Planets() {
  return (
    <div className="text-light-blue flex-col justify-center align-center">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">Planets</h1>
      {/* renderItem skickas till List och skapar ett PlanetCard per planet-objekt */}
      <List
        items={mockDataPlanets}
        renderItem={(item) => <PlanetCard planet={item} />}
      />
    </div>
  );
}
