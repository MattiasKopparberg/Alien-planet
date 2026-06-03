import AlienCard from "../components/aliens/AlienCard";
import List from "../components/List";
import "../App.css";
import { useAliens } from "../hooks/useAliens";
import LoadingSpinner from "../components/loading/LoadingSpinner";

export default function Aliens() {
  const { aliens, error, isLoading } = useAliens();

  if (error) return <p>{error}</p>;
  return (
    <div className="text-light-blue">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">
        Aliens
      </h1>
      {isLoading ? (
        <>
          <h2 className="font-paragraph text-light-blue text-lg py-3 text-center w-full">
            Aliens are loading..
          </h2>
          <LoadingSpinner size="s" />
        </>
      ) : (
        <List
          items={aliens}
          renderItem={(item) => <AlienCard alien={item} />}
        />
      )}
    </div>
  );
}
