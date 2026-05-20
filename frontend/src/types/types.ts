export interface Planet {
  planet_id: number;
  name: string;
  surface_area: number;
  avg_temp: number;
  image_url?: string;
}

export interface Alien {
  alien_id: number;
  planet_id: number; // Foreign key to Planet
  species: string;
  aggression: "hostile" | "neutral" | "friendly";
  habitat: "water" | "surface" | "airborne";
  image_url?: string;
}
