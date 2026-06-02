import AlienCard from "../components/aliens/AlienCard";
import List from "../components/List";
import { useAliens } from "../hooks/useAliens";
import "../App.css";

export default function Aliens() {
  const { aliens, error } = useAliens();

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Aliens</h1>
      <List items={aliens} renderItem={(item) => <AlienCard alien={item} />} />
    </div>
  );
}
