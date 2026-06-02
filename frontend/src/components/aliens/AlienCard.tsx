import type { Alien } from "../../types/types";

export default function AlienCard({ alien }: { alien: Alien }) {
  return (
    <div className="relative rounded-xl shadow-alien overflow-hidden w-61.25 h-54">
      <img
        className="w-full h-full object-cover"
        src={`http://localhost:3000/api/aliens/${alien.alien_id}/image`} // src fetches image directly from backend URL, no separate fetch needed
        alt={alien.species}
        onError={(e) => {
          e.currentTarget.src = "/Alien-fallback.jpg";
          e.currentTarget.onerror = null;
        }}
      />
      <div className="absolute bottom-0 w-full bg-alien-label text-center py-1">
        <h3
          className="uppercase font-bold 
        tracking-[0.12rem] "
        >
          {alien.species}
        </h3>
      </div>
    </div>
  );
}
