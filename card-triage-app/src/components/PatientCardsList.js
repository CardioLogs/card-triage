import "./PatientCardsList.css";
import PatientCardItem from "./PatientCardItem";

function PatientCardsList() {
  return (
    <div className="cards-list shadow">
      <div className="cards-list__head align-items-center p-3 link-dark text-decoration-none">Patients</div>
      <div className="list-group scrollarea">
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
      </div>
    </div>
  );
}

export default PatientCardsList;
