export type Aggression = "hostile" | "neutral" | "friendly";

export type Habitat = "water" | "surface" | "airborne";

export interface Planet {
  planet_id?: number;
  name: string;
  surface_area: number;
  avg_temp: number;
  descr?: string;
}

export interface Alien {
  alien_id?: number;
  species: string;
  aggression?: Aggression;
  habitat: Habitat;
  planet_id: number;
  descr?: string;
}
