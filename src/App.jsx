import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import jsxImg from "./assets/jsx-ui.png"
import stateImg from "./assets/state-mgmt.png"
import { DataObject } from "./data";
const App = () => {
  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CoreConcepts {...DataObject[0]} />
            <CoreConcepts {...DataObject[1]} />
            <CoreConcepts {...DataObject[2]} />
            <CoreConcepts {...DataObject[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
