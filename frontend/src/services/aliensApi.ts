import type { Alien } from "../types/types";
export async function getAllAliens(): Promise<Alien[]> {
  try {
    const response = await fetch("https://alienplanet.onrender.com/api/aliens");
    if (!response.ok) {
      throw new Error("Could not fetch aliens");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; // if no aliens were succesfully fetched, an empty array will return for error-handling
  }
}
