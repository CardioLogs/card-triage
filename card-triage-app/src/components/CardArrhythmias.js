import "./CardArrhythmias.css";

function CardArrhythmias(props) {

  return (
    <p>
        {props.arrhythmias.join(", ")}
    </p>
  );
}

export default CardArrhythmias;
