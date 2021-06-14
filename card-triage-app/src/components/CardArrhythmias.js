import "./CardArrhythmias.css";

function CardArrhythmias(props) {

  return (
    <div className="card-arrhythmias">
        {props.arrhythmias.join(", ")}
    </div>
  );
}

export default CardArrhythmias;
