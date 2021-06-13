import "./PatientCardItem.css";

function PatientCardItem(props) {

  return (
    <div className="patient-card-item list-group-item py-3 lh-tight shadow-sm">
      <h2 className="patient-card-item__name">{props.pName || "Unknown"}</h2>
      <div className="patient-card-item__properties">
        <p>{props.pId || "-"}</p>
        <p>{props.date || "-"}</p>
        <p>{props.arrhythmias || "-"}</p>
      </div>
    </div>
  );
}

export default PatientCardItem;
