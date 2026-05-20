import type { Planet } from "../../types/types";

export default function PlanetCard({ planet }: { planet: Planet }) {
  return (
    <div className="planet-card">
      <img
        src={`/images/planets/${planet.planet_id}.png`}
        alt={planet.name}
        onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
      />
      <h3>{planet.name}</h3>
      <p>Surface Area: {planet.surface_area}</p>
      <p>Average Temperature: {planet.avg_temp}</p>
    </div>
  );
}
