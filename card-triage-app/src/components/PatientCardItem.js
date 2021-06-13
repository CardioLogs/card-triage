import "./PatientCardItem.css";

function PatientCardItem() {
  return (
    <div className="patient-card-item list-group-item list-group-item-action py-3 lh-tight">
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
