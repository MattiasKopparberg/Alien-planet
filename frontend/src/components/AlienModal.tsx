import type { Alien } from "../types/types";
import type { Planet } from "../types/types";

interface Props {
  alien: Alien;
  planet: Planet;
  onClose: () => void; 
}


export default function AlienModal({ alien, planet, onClose}: Props) {
  return (
    <div className="relative text-light-blue w-190 rounded-xl p-8 backdrop-blur-xs bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] border border-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.3)] z-10">
      <span
        onClick={onClose}
        className="absolute top-3 right-5 text-xl cursor-pointer hover:text-magenta select-none">
        ✕
      </span>
      <div className="flex items-center gap-5">
        <img
          className="h-60 w-60 object-cover rounded-xl"
          src={`https://alienplanet.onrender.com/api/aliens/${alien.alien_id}/image`}
            alt={alien.species}
            onError={(e) => {
              e.currentTarget.src = "/Alien-fallback.jpg";
              e.currentTarget.onerror = null;
            }}
        />
        <div className="flex-col">
          <h2 className="font-subheading mb-3 text-xl">{alien.species}</h2>
          <p className="font-paragraph">
            <span className="font-bold">Aggression: </span>{alien.aggression}</p>
          <p className="font-paragraph">
            <span className="font-bold">Habitat: </span>{alien.habitat}</p>
        </div>
      </div>
      <p className="font-paragraph mt-3">{alien.descr}
      </p>
      <div className="mt-5">
        <h2 className="font-subheading mb-3">Home Planet</h2>
        <div className="flex flex-col items-center w-fit">
        <img
          className="h-36 w-36 object-cover rounded-xl"
          src={`https://alienplanet.onrender.com/api/planets/${alien.planet_id}/image`}
            onError={(e) => {
              e.currentTarget.src = "/Planet-fallback.jpg";
              e.currentTarget.onerror = null;
            }}
        />
        <p className="text-center mt-2 text-[13px]">{planet.name}</p>
        </div>
      </div>
    </div>
  );
}
