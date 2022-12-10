import { useState, useEffect } from "react";
import "./App.css";
import Starship from "./components/Starship/Starship";
import spaceAutoplay from "../src/Y2Mate.is - Space Flight Loop-NtOwzU5Rpp8-720p-1660185623250.mp4";

function App() {
  const [shipData, setShipData] = useState({});

  async function getShips() {
    const apiUrl = `https://swapi.dev/api/starships`;
    const res = await fetch(apiUrl);
    const json = await res.json();
    setShipData(json);
  }
  useEffect(() => {
    getShips();
  }, []);

  console.log(shipData.results);

  const ships = shipData.results?.map((ship, index) => {
    return (
      <Starship
        key={index}
        name={ship.name}
        model={ship.model}
        manufacturer={ship.manufacturer}
        crew={ship.crew}
        passengers={ship.passengers}
        pilots={ship.pilots}
        length={ship.length}
        cost={ship.cost_in_credits}
      />
    );
  });
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={spaceAutoplay} type="video/mp4" />
      </video>
      <h1 className="heading-main">In a galaxy far far away...</h1>
      <h2 className="heading-sub">Starships</h2>

      <main className="ships">{ships}</main>
    </div>
  );
}

export default App;
