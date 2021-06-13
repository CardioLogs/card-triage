import "./PatientCardItem.css";

function PatientCardItem() {
  return (
    <div className="patient-card-item list-group-item py-3 lh-tight shadow-sm">
      <h2 className="patient-card-item__name">Name</h2>
      <div className="patient-card-item__properties">
        <p>Patient n° Id</p>
        <p>creation date</p>
        <p>arrhythmias</p>
      </div>
    </div>
  );
}

export default PatientCardItem;
