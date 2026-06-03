import AlienCard from "../components/aliens/AlienCard";
import List from "../components/List";
import "../App.css";
import { useAliens } from "../hooks/useAliens";

export default function Aliens() {
  const { aliens, error } = useAliens();

  if (error) return <p>{error}</p>;
  return (
    <div className="text-light-blue">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">
        Aliens
      </h1>
      <List items={aliens} renderItem={(item) => <AlienCard alien={item} />} />
    </div>
  );
}
