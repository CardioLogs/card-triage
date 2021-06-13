import "./App.css";
import React, { useState } from "react";
import PatientCardsList from "./components/PatientCardsList";
import SearchBar from "./components/SearchBar";

function App() {
  // state = {
  //   cards: [],
  // };

  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //   })
  //   .catch(console.log)
  // }

  let cards = [
    {
      arrhythmias: ["AFib", "AV Block", "Pause", "PSVC", "PVC"],
      created_date: "2020-03-10T13:14:59+0000",
      id: "0",
      patient_name: "Bob",
      status: "PENDING",
    },
    {
      arrhythmias: ["Pause"],
      created_date: "2020-01-01T00:12:21+0000",
      id: "1",
      patient_name: "Bill",
      status: "REJECTED",
    },
  ];
  const [allCards, setAllCards] = useState(cards);

  return (
    <div className="App">
      <h1 className="title">Patients cards</h1>
      <h2 className="subtitle">Organize your patients cards</h2>
      <div className="search">
        <SearchBar></SearchBar>
      </div>
      <div className="cards-lists">
        <PatientCardsList
          name="Pending cards"
          pending={true}
          allCards={allCards}
          setAllCards={setAllCards}
        ></PatientCardsList>

        <PatientCardsList
          name="Treated cards"
          pending={false}
          allCards={allCards}
          setAllCards={setAllCards}
        ></PatientCardsList>
      </div>
    </div>
  );
}

export default App;
