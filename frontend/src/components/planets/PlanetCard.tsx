import type { Planet } from "../../types/types";

export default function PlanetCard({ planet }: { planet: Planet }) {
  return (
    <div className="planet-card">
      <img className = "h-50 w-50 object-cover"
        src={`/images/planets/${planet.planet_id}.png`}
        alt={planet.name}
        onError={(e) => {
          e.currentTarget.src = "/Planet-fallback.jpg";
          e.currentTarget.onerror = null;
        }}
      />
      <h3>{planet.name}</h3>
      <p>Surface Area: {planet.surface_area}</p>
      <p>Average Temperature: {planet.avg_temp}</p>
    </div>
  );
}
