import "./CardButtons.css";
import React, { useState } from "react";

function CardButtons(props) {
  const [status, SetStatus] = useState(props.status);

  const setTreated = () => {
    SetStatus("treated");
  };

  const setPending = () => {
    SetStatus("pending");
  };

  if (status === "pending") {
    return (
      <div className="card-buttons">
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={setTreated}
        >
          <i class="bi bi-check"></i>
        </button>

        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={setTreated}
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    );
  } else {
    return (
      <div className="card-buttons" onClick={setPending}>
        <button type="button" class="btn btn-outline-secondary">
          <i class="bi bi-hourglass"></i>
        </button>
      </div>
    );
  }
}

export default CardButtons;
