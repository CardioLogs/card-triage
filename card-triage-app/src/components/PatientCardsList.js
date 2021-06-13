import "./PatientCardsList.css";
import PatientCardItem from "./PatientCardItem";

function PatientCardsList() {
  return (
    <div className="cards-list d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
      <div className="cards-list__head d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none">
        Patients
      </div>
      <div className="list-group scrollarea">
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
      </div>
    </div>
  );
}

export default PatientCardsList;
