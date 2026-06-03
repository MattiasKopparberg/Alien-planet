import { useState, useEffect } from "react";
import type { Planet } from "../types/types";
import { getAllPlanets } from "../services/planetsApi";

export function usePlanets() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [error, setError] = useState<string | null>(null);

  // fetches all planets on mount, sets error state if fetch fails
  useEffect(() => {
    async function fetchPlanets() {
      try {
        const data = await getAllPlanets();
        setPlanets(data);
      } catch {
        setError("Something went wrong, could not fetch planets");
      }
    }

    fetchPlanets();
  }, []);

  return { planets, error };
}
