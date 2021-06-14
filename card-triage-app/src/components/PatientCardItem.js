import "./PatientCardItem.css";
import CardArrhythmias from "./CardArrhythmias";
import CardButtons from "./CardButtons";

function PatientCardItem(props) {
  const formattedDate = props.date
    ? new Date(props.date).toLocaleDateString("en-US")
    : "-";
  return (
    <div className="patient-card-item list-group-item py-3 lh-tight shadow-sm">
      <div className="patient-card-item__id">{props.id}</div>
      <div className="patient-card-item__name"><b>{props.pName || "Unknown"}</b></div>
      <div className="patient-card-item__date">{formattedDate}</div>
      <CardArrhythmias
        arrhythmias={props.arrhythmias || []}
      ></CardArrhythmias>
      <CardButtons
        status={props.status}
        id={props.id}
        allCards={props.allCards}
        setAllCards={props.setAllCards}
      ></CardButtons>
    </div>
  );
}

export default PatientCardItem;
