import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import jsxImg from "./assets/jsx-ui.png"
import stateImg from "./assets/state-mgmt.png"
import { DataObject } from "./data";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul style={{display: "flex", justifyContent: "space-evenly"}}>
            <CoreConcepts {...DataObject[0]} />
            <CoreConcepts {...DataObject[1]} />
            <CoreConcepts {...DataObject[2]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
