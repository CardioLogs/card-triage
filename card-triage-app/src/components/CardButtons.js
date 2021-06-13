import "./CardButtons.css";
import React, { useState } from "react";

function CardButtons(props) {
  const [status, SetStatus] = useState(props.status);

  const updateStatusAndList = (newStatus) => {
    let allCards = props.allCards || [];
    allCards = allCards.map((card) => {
      if (card.id === props.id) {
        card.status = newStatus;
        SetStatus(newStatus);
      }
      return card;
    });
    props.setAllCards(allCards);
  };

  const setRejected = () => {
    updateStatusAndList("REJECTED");
  };

  const setDone = () => {
    updateStatusAndList("DONE");
  };

  const setPending = () => {
    updateStatusAndList("PENDING");
  };

  return (
    <div className="card-buttons">
      <button
        type="button"
        className={"btn btn-outline-success" + (status === "DONE" ? " active" : "")}
        onClick={setDone}
      >
        <i className="bi bi-check"></i>
      </button>

      <button
        type="button"
        className={"btn btn-outline-danger" + (status === "REJECTED" ? " active" : "")}
        onClick={setRejected}
      >
        <i className="bi bi-x"></i>
      </button>

      <button
        type="button"
        className={"btn btn-outline-secondary" + (status === "PENDING" ? " active" : "")}
        onClick={setPending}
      >
        <i className="bi bi-hourglass"></i>
      </button>
    </div>
  );
}

export default CardButtons;
