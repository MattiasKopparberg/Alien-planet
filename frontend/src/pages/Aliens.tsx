import AlienCard from "../components/aliens/AlienCard";
import List from "../components/List";
import type { Alien } from "../types/types";
import "../App.css";


const mockDataAliens: Alien[] = [
  {
    alien_id: 1,
    planet_id: 1,
    species: "Zorgon",
    aggression: "hostile",
    habitat: "surface",
  },
  {
    alien_id: 2,
    planet_id: 2,
    species: "Blobb",
    aggression: "friendly",
    habitat: "water",
  },
];

export default function Aliens() {
  return (
    <div className="text-light-blue">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">Aliens</h1>
      <List
        items={mockDataAliens}
        renderItem={(item) => <AlienCard alien={item} />}
      />
    </div>
  );
}
