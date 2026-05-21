export type Aggression = "friendly" | "neutral" | "aggressive";

export type Alien = {
  alien_id: number;
  species: string;
  aggression: Aggression;
  planet_id: number;
};
