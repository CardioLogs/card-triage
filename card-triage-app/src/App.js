import "./App.css";
import PatientCardsList from "./components/PatientCardsList";


function App() {
  return (
    <div className="App">
      <h1>Patients cards</h1>
      <h2>Organize your patients cards</h2>
      <div className="cards-lists">
          <PatientCardsList></PatientCardsList>
          <PatientCardsList></PatientCardsList>
      </div>
    </div>
  );
}

export default App;
