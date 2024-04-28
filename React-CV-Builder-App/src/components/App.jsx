import PersonalDetails from "./Personal";
import Education from "./education";
import Experience from "./experience";

function App() {
  return (
    <div className="App">
      <div id="inputs">
        <PersonalDetails />
        <Education />
        <Experience />
      </div>
      <div id="page">{/* <CV /> */}</div>
    </div>
  );
}

export default App;
