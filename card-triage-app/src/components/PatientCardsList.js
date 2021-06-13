import "./PatientCardsList.css";
import PatientCardItem from "./PatientCardItem";

function PatientCardsList(props) {

  return (
    <div className="cards-list shadow">
      <div className="cards-list__head align-items-center p-3 link-dark text-decoration-none">{props.name}</div>
      <div className="list-group overflow-auto">
        <PatientCardItem pName="Bob" pId="3456" date="Today" arrhythmias="a, b, c"></PatientCardItem>
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
        <PatientCardItem></PatientCardItem>
      </div>
    </div>
  );
}

export default PatientCardsList;
