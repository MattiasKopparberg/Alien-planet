import { useState, useMemo } from "react";
import PlanetCard from "../components/planets/PlanetCard";
import List from "../components/List";
import { usePlanets } from "../hooks/usePlanets";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import "../App.css";
import PlanetFilterBar from "../components/planets/PlanetFilterBar";

export default function Planets() {
  const { planets, error, isLoading } = usePlanets();
  const [surfaceArea, setSurfaceArea] = useState<number[]>([74, 61420]);
  const [temp, setTemp] = useState<number[]>([-200, 464]);

  // Filtered list — recalculates when filters or data changes
  const filtered = useMemo(() => {
    return planets.filter((p) => {
      if (p.surface_area < surfaceArea[0] || p.surface_area > surfaceArea[1]) return false;
      if (p.avg_temp < temp[0] || p.avg_temp > temp[1]) return false;
      return true;
    });
  }, [planets, surfaceArea, temp]);

  if (error) return <p>{error}</p>;

  return (
    <div className="text-light-blue pt-28">
      <h1 className="font-heading text-center heading-planet text-7xl py-2">Planets</h1>
      <PlanetFilterBar
        surfaceArea={surfaceArea}
        onSurfaceAreaChange={setSurfaceArea}
        temp={temp}
        onTempChange={setTemp}
      />
      {isLoading ? (
        <>
          <h2 className="font-paragraph text-light-blue text-lg py-3 text-center w-full">
            Planets are loading..
          </h2>
          <LoadingSpinner size="s" />
        </>
      ) : (
        <List items={filtered} renderItem={(item) => <PlanetCard planet={item} />} />
      )}
    </div>
  );
}
