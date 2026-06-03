import type { Planet } from "../types/types";
import type { Alien } from "../types/types";

interface Props {
  planet: Planet;
  aliens: Alien[];
  onClose: () => void;
}

export default function PlanetModal({ planet, aliens, onClose}: Props) {
  return (
    <div className="relative text-light-blue w-190 rounded-xl p-8 backdrop-blur-xs bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)]">
      <span
        onClick={onClose}
        className="absolute top-3 right-5 text-xl cursor-pointer hover:text-magenta select-none">
        ✕
      </span>
      <div className="flex items-center gap-7">
        <img
          className="h-60 w-60 object-cover rounded-xl"
          src={`https://alienplanet.onrender.com/api/planets/${planet.planet_id}/image`}
            alt={planet.name}
            onError={(e) => {
              e.currentTarget.src = "/Planet-fallback.jpg";
              e.currentTarget.onerror = null;
            }}
        />
        <div className="flex-col">
          <h2 className="font-subheading mb-3 text-xl">{planet.name}</h2>
          <p className="font-paragraph">
            <span className="font-bold">Surface Area: </span>{planet.surface_area}
          </p>
          <p className="font-paragraph">
            <span className="font-bold">Avg temperature: </span>{planet.avg_temp}
          </p>
        </div>
      </div>
      <p className="font-paragraph mt-3">
        {planet.descr}
      </p>
      <div className="mt-5">
        <h2 className="font-subheading mb-3">Inhabitants</h2>
        <div className="flex gap-5">
          
          {aliens.map((alien) => (
            <div key={alien.alien_id} className="flex flex-col">
        <img
          className="h-36 w-36 object-cover rounded-xl"
          src={`https://alienplanet.onrender.com/api/aliens/${alien.alien_id}/image`}
          alt={alien.species}
          onError={(e) => {
            e.currentTarget.src = "/Alien-fallback.jpg";
            e.currentTarget.onerror = null;
          }}
        />
        <p className="text-center mt-2 text-[13px]">{alien.species}</p>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}
