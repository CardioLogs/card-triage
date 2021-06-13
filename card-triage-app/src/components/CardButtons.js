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

  const setTreated = () => {
    updateStatusAndList("TREATED");
  };

  const setPending = () => {
    updateStatusAndList("PENDING");
  };

  if (status === "PENDING") {
    return (
      <div className="card-buttons">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={setTreated}
        >
          <i className="bi bi-check"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={setRejected}
        >
          <i className="bi bi-x"></i>
        </button>
      </div>
    );
  } else {
    return (
      <div className="card-buttons" onClick={setPending}>
        <button type="button" className="btn btn-outline-secondary">
          <i className="bi bi-hourglass"></i>
        </button>
      </div>
    );
  }
}

export default CardButtons;
