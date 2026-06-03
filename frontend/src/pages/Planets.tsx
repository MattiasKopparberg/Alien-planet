import { useState } from "react";
import PlanetCard from "../components/planets/PlanetCard";
import List from "../components/List";
import { usePlanets } from "../hooks/usePlanets";
import { useAliens } from "../hooks/useAliens";
import type { Planet } from "../types/types";
import "../App.css";
import PlanetModal from "../components/PlanetModal";

export default function Planets() {
  const { planets, error: planetError } = usePlanets();
  const { aliens, error: aliensError } = useAliens();
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const selectedAliens = aliens.filter(
    (a) => a.planet_id === selectedPlanet?.planet_id
  );

  console.log("all aliens:", aliens);
  console.log("selected planet id:", selectedPlanet?.planet_id);
  console.log("matching aliens:", selectedAliens);


  if (planetError) return <p>{planetError}</p>;
  if (aliensError) return <p>{aliensError}</p>;

  return (
        <div className="text-light-blue">
          <h1 className="font-heading text-center text-magenta text-7xl py-2">
            Planets
          </h1>
          <List
            items={planets}
            renderItem={(item) => (
              <PlanetCard planet={item} onClick={() => setSelectedPlanet(item)} />
            )}
          />
    
          {selectedPlanet && selectedAliens && (
            <div className="flex justify-center items-center fixed inset-0 z-50 bg-space-blue/60">
            <PlanetModal
              planet={selectedPlanet}
              aliens={selectedAliens}
              onClose={()=> setSelectedPlanet(null)}
              />
              </div>
          )}
        </div>
      );
}
