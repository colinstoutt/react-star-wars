export default function Starship(props) {
  return (
    <>
      <div
        style={{
          border:
            props.name === "Death Star" ||
            props.name === "TIE Advanced x1" ||
            props.name === "Star Destroyer" ||
            props.name === "Executor" ||
            props.name === "Sentinel-class landing craft"
              ? "2px solid red"
              : "2px solid blue",
        }}
        className="starship"
      >
        <h1>{props.name}</h1>
        <span>
          Model: <p>{props.model}</p>
        </span>{" "}
        <br />
        <span>
          Manufacturer: <p>{props.manufacturer}</p>
        </span>
        <br />
        <span>
          Crew: <p>{props.crew}</p>
        </span>
        <br />
        <span>
          Passengers: <p>{props.passengers}</p>
        </span>
        <br />
        <span>
          Length: <p>{props.length}m</p>
        </span>
        <br />
        <span>
          Cost: <p>{props.cost}</p>
        </span>
      </div>
    </>
  );
}
