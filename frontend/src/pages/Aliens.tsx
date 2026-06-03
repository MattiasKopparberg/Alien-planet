import { useState, useMemo } from "react";
import AlienCard from "../components/aliens/AlienCard";
import List from "../components/List";
import "../App.css";
import { useAliens } from "../hooks/useAliens";
import { usePlanets } from "../hooks/usePlanets";
import AlienFilterBar from "../components/aliens/AlienFilterBar";

export default function Aliens() {
  const { aliens, error } = useAliens();
  const { planets } = usePlanets();
  const [selectedAggression, setSelectedAggression] = useState<string[]>([]);
  const [selectedHabitat, setSelectedHabitat] = useState<string[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);

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

  if (error) return <p>{error}</p>;
  return (
    <div className="text-light-blue pt-28">
      <h1 className="font-heading text-center heading-alien text-7xl py-2">Aliens</h1>
      <AlienFilterBar
        selectedAggression={selectedAggression}
        onToggleAggression={toggleAggression}
        selectedHabitat={selectedHabitat}
        onToggleHabitat={toggleHabitat}
        planets={planets}
        selectedPlanet={selectedPlanet}
        onChangePlanet={setSelectedPlanet}
      />
      <List
        items={filtered}
        renderItem={(item) => <AlienCard alien={item} />}
      />
    </div>
  );
}
