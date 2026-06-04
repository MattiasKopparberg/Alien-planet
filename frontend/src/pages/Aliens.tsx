import { useState, useMemo } from "react";
import AlienCard from "../components/aliens/AlienCard";
import AlienModal from "../components/AlienModal";
import AlienFilterBar from "../components/aliens/AlienFilterBar";
import List from "../components/List";
import "../App.css";
import type { Alien } from "../types/types";
import { useAliens } from "../hooks/useAliens";
import { usePlanets } from "../hooks/usePlanets";
import LoadingSpinner from "../components/loading/LoadingSpinner";

export default function Aliens() {
  const { aliens, error: aliensError, isLoading } = useAliens();
  const { planets, error: planetError } = usePlanets();
  const [selectedAggression, setSelectedAggression] = useState<string[]>([]);
  const [selectedHabitat, setSelectedHabitat] = useState<string[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);

  //Alien Modals
  const [modalAlien, setModalAlien] = useState<Alien | null>(null);
  const modalPlanet = planets.find(
    (p) => p.planet_id === modalAlien?.planet_id,
  );

  // Toggle helpers
  function toggleAggression(val: string) {
    setSelectedAggression((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
    );
  }

  function toggleHabitat(val: string) {
    setSelectedHabitat((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
    );
  }

  // Filtered list — recalculates when filters or data changes
  const filtered = useMemo(() => {
    return aliens.filter((a) => {
      if (
        selectedAggression.length &&
        !selectedAggression.includes(a.aggression)
      )
        return false;
      if (selectedHabitat.length && !selectedHabitat.includes(a.habitat))
        return false;
      if (selectedPlanet !== null && a.planet_id !== selectedPlanet)
        return false;
      return true;
    });
  }, [aliens, selectedAggression, selectedHabitat, selectedPlanet]);

  if (aliensError) return <p>{aliensError}</p>;
  if (planetError) return <p>{planetError}</p>;

  return (
    <div className="text-light-blue pt-28">
      <h1 className="font-heading text-center heading-alien text-7xl py-2">
        Aliens
      </h1>
      <AlienFilterBar
        selectedAggression={selectedAggression}
        onToggleAggression={toggleAggression}
        selectedHabitat={selectedHabitat}
        onToggleHabitat={toggleHabitat}
        planets={planets}
        selectedPlanet={selectedPlanet}
        onChangePlanet={setSelectedPlanet}
      />
      {isLoading ? (
        <>
          <h2 className="font-paragraph text-light-blue text-lg py-3 text-center w-full">
            Aliens are loading..
          </h2>
          <LoadingSpinner size="s" />
        </>
      ) : (
        <List
          items={filtered}
          renderItem={(item) => (
            <AlienCard alien={item} onClick={() => setModalAlien(item)} />
          )}
        />
      )}
      ;
      {modalAlien && modalPlanet && (
        <div className="flex justify-center items-center fixed inset-0 z-50 bg-space-blue/60">
          <AlienModal
            alien={modalAlien}
            planet={modalPlanet}
            onClose={() => setModalAlien(null)}
          />
        </div>
      )}
    </div>
  );
}
