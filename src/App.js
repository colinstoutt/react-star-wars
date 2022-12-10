import { useState, useEffect } from "react";
import "./App.css";
import Starship from "./components/Starship";

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
      />
    );
  });
  return (
    <div className="App">
      <h1>In a galaxy far far away...</h1>
      {ships}
    </div>
  );
}

export default App;
