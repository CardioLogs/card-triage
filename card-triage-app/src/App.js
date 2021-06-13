import "./App.css";
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

  return (
    <div className="App">
      <h1 className="title">Patients cards</h1>
      <h2 className="subtitle">Organize your patients cards</h2>
      <div className="search"><SearchBar></SearchBar></div>
      <div className="cards-lists">
        <PatientCardsList name="Pending cards" status="pending"></PatientCardsList>
        <PatientCardsList name="Treated cards" status="treated"></PatientCardsList>
      </div>
    </div>
  );
}

export default App;
