import PlanetCard from "../components/planets/PlanetCard";
import List from "../components/List";
import { usePlanets } from "../hooks/usePlanets";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import "../App.css";

export default function Planets() {
  const { planets, error, isLoading } = usePlanets();

  if (error) return <p>{error}</p>;

  return (
    <div className="text-light-blue flex-col justify-center align-center">
      <h1 className="font-heading text-center text-magenta text-7xl py-2">
        Planets
      </h1>

      {isLoading ? (
        <>
          <h2 className="font-paragraph text-light-blue text-lg py-3 text-center w-full">
            Planets are loading..
          </h2>
          <LoadingSpinner size="s" />
        </>
      ) : (
        <List
          items={planets}
          renderItem={(item) => <PlanetCard planet={item} />}
        />
      )}
    </div>
  );
}
