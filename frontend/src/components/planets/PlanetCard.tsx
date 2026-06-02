import type { Planet } from "../../types/types";

export default function PlanetCard({ planet }: { planet: Planet }) {
  return (
    <div className="relative rounded-xl shadow-planet overflow-hidden w-61.25 h-54">
      <img
        className="w-full h-full object-cover"
        src={`http://localhost:3000/api/planets/${planet.planet_id}/image`} // src fetches image directly from backend URL, no separate fetch needed
        alt={planet.name}
        onError={(e) => {
          e.currentTarget.src = "/Planet-fallback.jpg";
          e.currentTarget.onerror = null;
        }}
      />
      <div className="absolute bottom-0 w-full bg-planet-label text-center py-1">
        <h3 className="font-heading">{planet.name}</h3>
      </div>
    </div>
  );
}
