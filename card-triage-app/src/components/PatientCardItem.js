import "./PatientCardItem.css";
import CardArrhythmias from "./CardArrhythmias";
import CardButtons from "./CardButtons";

function PatientCardItem(props) {

  const formattedDate = props.date ? new Date(props.date).toLocaleDateString('en-US') : "-";
  return (
    <div className="patient-card-item list-group-item py-3 lh-tight shadow-sm">
      <h2 className="patient-card-item__name">{props.pName || "Unknown"}</h2>
      <div className="patient-card-item__properties">
        <p>{props.pId || "-"}</p>
        <p>{formattedDate}</p>
        <p>{props.arrhythmias || "-"}</p>
        <CardArrhythmias arrhythmias=""></CardArrhythmias>
        <CardButtons status={props.status}></CardButtons>
      </div>
    </div>
  );
}

export default PatientCardItem;
