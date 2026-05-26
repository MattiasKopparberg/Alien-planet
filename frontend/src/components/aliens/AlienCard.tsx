import type { Alien } from "../../types/types";

export default function AlienCard({ alien }: { alien: Alien }) {
  return (
    <div className="alien-card">
      <img className = "h-50 w-50 object-cover"
        src={`/images/aliens/${alien.alien_id}.png`}
        alt={alien.species}
        onError={(e) => {
          e.currentTarget.src = "/Alien-fallback.jpg";
          e.currentTarget.onerror = null; // förhindrar infinity loop
        }}
      />
      <h3>{alien.species}</h3>
      <p>Aggression: {alien.aggression}</p>
      <p>Habitat: {alien.habitat}</p>
    </div>
  );
}
