import "./PatientCardsList.css";
import PatientCardItem from "./PatientCardItem";

function PatientCardsList(props) {
  let filteredCards = [];
  if (props.pending) {
    filteredCards = props.allCards.filter((card) => card.status === "PENDING");
  } else {
    filteredCards = props.allCards.filter(
      (card) => card.status === "DONE" || card.status === "REJECTED"
    );
  }

  filteredCards = filteredCards.sort((a, b) => a.created_date > b.created_date)

  return (
    <div className="cards-list shadow">
      <div className="cards-list__head align-items-center p-3 link-dark text-decoration-none">
        {props.name}
      </div>
      <div className="list-group overflow-auto">
        {filteredCards.map((card) => {
          return (
            <PatientCardItem
              key={card.id}
              id={card.id}
              pName={card.patient_name}
              date={card.created_date}
              arrhythmias={card.arrhythmias}
              status={card.status}
              allCards={props.allCards}
              setAllCards={props.setAllCards}
            ></PatientCardItem>
          );
        })}
      </div>
    </div>
  );
}

export default PatientCardsList;
