import "./PatientCardItem.css";
import CardArrhythmias from "./CardArrhythmias";
import CardButtons from "./CardButtons";

function PatientCardItem(props) {
  const formattedDate = props.date
    ? new Date(props.date).toLocaleDateString("en-US")
    : "-";
  return (
    <div className="patient-card-item list-group-item py-3 lh-tight shadow-sm">
      <h2 className="patient-card-item__name">{props.pName || "Unknown"}</h2>
      <div className="patient-card-item__properties">
        <p>{props.id || "-"}</p>
        <p>{formattedDate}</p>
        <CardArrhythmias arrhythmias={props.arrhythmias || []}></CardArrhythmias>
        <CardButtons
          status={props.status}
          id={props.id}
          allCards={props.allCards}
          setAllCards={props.setAllCards}
        ></CardButtons>
      </div>
    </div>
  );
}

export default PatientCardItem;
