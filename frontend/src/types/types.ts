export interface Planet {
  planet_id: number;
  name: string;
  surface_area: number;
  avg_temp: number;
}

export interface Alien {
  alien_id: number;
  planet_id: number; // Foreign key to Planet
  species: string;
  aggression: "hostile" | "neutral" | "friendly";
  habitat: "water" | "surface" | "airborne";
}
