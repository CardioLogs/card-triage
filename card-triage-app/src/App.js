import "./App.css";
import PatientCardsList from "./components/PatientCardsList";


function App() {
  return (
    <div className="App">
      <h1 className="title">Patients cards</h1>
      <h2 className="subtitle">Organize your patients cards</h2>
      <div className="search">search area</div>
      <div className="cards-lists">
          <PatientCardsList name="Cards to treat"></PatientCardsList>
          <PatientCardsList name="Treated cards"></PatientCardsList>
      </div>
    </div>
  );
}

export default App;
