import "./App.css";
import React, { Component } from "react";
import PatientCardsList from "./components/PatientCardsList";
import SearchBar from "./components/SearchBar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { allCards: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3001/cards')
    .then(res => res.json())
    .then((data) => {
      this.setState({ allCards: data })
    })
    .catch(console.log)
  }

  render() {

    const setAllCards = (newCards) => {
      this.setState({ allCards: newCards })
    }

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
            allCards={this.state.allCards}
            setAllCards={setAllCards}
          ></PatientCardsList>
  
          <PatientCardsList
            name="Treated cards"
            pending={false}
            allCards={this.state.allCards}
            setAllCards={setAllCards}
          ></PatientCardsList>
        </div>
      </div>
    );
  }
}

export default App;
