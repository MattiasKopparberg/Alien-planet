import type { Alien } from "../../types/types";

interface Props {
  alien: Alien;
  onClick: () => void;
}

export default function AlienCard({ alien, onClick }: Props) {
  return (
    <div className="relative rounded-xl shadow-alien overflow-hidden w-61.25 h-54 cursor-pointer"
    onClick={onClick}>
      <img
        className="w-full h-full object-cover"
        src={`https://alienplanet.onrender.com/api/aliens/${alien.alien_id}/image`} // src fetches image directly from backend URL, no separate fetch needed
        alt={alien.species}
        onError={(e) => {
          e.currentTarget.src = "/Alien-fallback.jpg";
          e.currentTarget.onerror = null;
        }}
      />
      <div className="absolute bottom-0 w-full bg-alien-label text-center py-1">
        <h3
          className="uppercase font-bold 
        tracking-[0.12rem] ">
          {alien.species}
        </h3>
      </div>
    </div>
  );
}
