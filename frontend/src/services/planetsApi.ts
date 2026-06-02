import type { Planet } from "../types/types";

export async function getAllPlanets(): Promise<Planet[]> {
  try {
    const response = await fetch("http://localhost:3000/api/planets");
    if (!response.ok) {
      throw new Error("Could not fetch planets");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; // if no planets were succesfully fetched, an empty array will return for error-handling
  }
}
