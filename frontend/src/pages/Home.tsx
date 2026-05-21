import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <h1>Alien Planets</h1>
    <h2>Some intro text</h2>
    <Link to="/Planets"><button>Explore Planets</button></Link>
    <Link to="/Aliens"><button>Explore Aliens</button></Link>
    </>
  );

}
