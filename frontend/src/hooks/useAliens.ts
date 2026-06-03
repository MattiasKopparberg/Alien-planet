import { useState, useEffect } from "react";
import type { Alien } from "../types/types";
import { getAllAliens } from "../services/aliensApi";

export function useAliens() {
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetches all aliens on mount, sets error state if fetch fails
  useEffect(() => {
    async function fetchAliens() {
      try {
        const data = await getAllAliens();
        setAliens(data);
        setIsLoading(false);
      } catch {
        setError("Something went wrong, could not fetch aliens");
      }
    }

    fetchAliens();
  }, []);

  return { aliens, error, isLoading };
}
