export default function Starship(props) {
  return (
    <>
      <div className="starship">
        <h1>{props.name}</h1>
        <span>Model: {props.model}</span> <br />
        <span>Manufacturer: {props.manufacturer}</span>
        <br />
        <span>crew: {props.crew}</span>
        <br />
        <span>Passengers: {props.passengers}</span>
        <br />
        <span>Length: {props.length}m</span>
        <br />
      </div>
    </>
  );
}
