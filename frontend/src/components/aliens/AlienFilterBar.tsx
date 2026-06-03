import "../../App.css";
import type { Planet } from "../../types/types";

// Toggle buttons for aggression/habitat + dropdown for home planet

const AGGRESSION = ["hostile", "neutral", "friendly"];
const HABITAT = ["water", "surface", "airborne"];

type Props = {
  selectedAggression: string[];
  onToggleAggression: (val: string) => void;
  selectedHabitat: string[];
  onToggleHabitat: (val: string) => void;
  planets: Planet[];
  selectedPlanet: number | null;
  onChangePlanet: (id: number | null) => void;
};

export default function AlienFilterBar({
  selectedAggression,
  onToggleAggression,
  selectedHabitat,
  onToggleHabitat,
  planets,
  selectedPlanet,
  onChangePlanet,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-8 py-6">
      <div className="flex flex-col items-center gap-2">
        <span className="font-subheading text-xs text-cyan/50 tracking-widest">
          filter by aggression
        </span>
        <div className="flex gap-3">
          {AGGRESSION.map((val) => (
            <button
              key={val}
              onClick={() => onToggleAggression(val)}
              className={`font-subheading text-xs px-4 py-2 rounded border tracking-widest transition-all duration-200
            ${
              selectedAggression.includes(val)
                ? "border-magenta text-magenta bg-magenta/10 shadow-[0_0_10px_rgba(238,130,238,0.6)]"
                : "border-cyan/30 text-cyan hover:border-cyan"
            }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="font-subheading text-xs text-cyan/50 tracking-widest">
          filter by habitat
        </span>
        <div className="flex gap-3">
          {HABITAT.map((val) => (
            <button
              key={val}
              onClick={() => onToggleHabitat(val)}
              className={`font-subheading text-xs px-4 py-2 rounded border tracking-widest transition-all duration-200
              ${
                selectedHabitat.includes(val)
                  ? "border-cyan text-cyan bg-cyan/10 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                  : "border-cyan/30 text-cyan/50 hover:border-cyan hover:text-cyan"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="font-subheading text-xs text-cyan/50 tracking-widest">
          filter by home planet
        </span>
        <select
          value={selectedPlanet ?? ""}
          onChange={(e) =>
            onChangePlanet(e.target.value ? Number(e.target.value) : null)
          }
          className="font-subheading text-xs text-cyan bg-space-blue border border-cyan/30 rounded px-4 py-2 tracking-widest focus:outline-none focus:border-cyan w-64"
        >
          <option value="">ALL PLANETS</option>
          {planets.map((p) => (
            <option key={p.planet_id} value={p.planet_id}>
              {p.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
