import type { Planet } from "../../types/types";

interface Props {
  planet: Planet;
  onClick: () => void;
}

export default function PlanetCard({ planet, onClick }: Props) {
  return (
    <div className="relative rounded-xl shadow-planet overflow-hidden w-61.25 h-54 cursor-pointer"
    onClick={onClick}>
      <img
        className="w-full h-full object-cover"
        src={`https://alienplanet.onrender.com/api/planets/${planet.planet_id}/image`} // src fetches image directly from backend URL, no separate fetch needed
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
