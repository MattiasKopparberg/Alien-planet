import { useState } from "react";
import AlienCard from "../components/aliens/AlienCard";
import AlienModal from "../components/AlienModal";
import List from "../components/List";
import "../App.css";
import type { Alien } from "../types/types";
import { useAliens } from "../hooks/useAliens";
import { usePlanets } from "../hooks/usePlanets";

export default function Aliens() {
  const { aliens, error: aliensError } = useAliens();
  const { planets, error: planetError } = usePlanets();
  const [selectedAlien, setSelectedAlien] = useState<Alien | null>(null);

  const selectedPlanet = planets.find(          
      (p) => p.planet_id === selectedAlien?.planet_id
    );

  if (aliensError) return <p>{aliensError}</p>;
  if (planetError) return <p>{planetError}</p>;

  return (
    <div className="text-light-blue">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">
        Aliens
      </h1>
      <List
        items={aliens}
        renderItem={(item) => (
          <AlienCard alien={item} onClick={() => setSelectedAlien(item)} />
        )}
      />

      {selectedAlien && selectedPlanet && (
        <div className="flex justify-center items-center fixed inset-0 z-50 bg-space-blue/60">
        <AlienModal
          alien={selectedAlien}
          planet={selectedPlanet}
          onClose={()=> setSelectedAlien(null)}
          />
          </div>
      )}
    </div>
  );
}
