import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import { DataObject } from "./data";
import { renderedData } from "./data"
import TapButton from "./components/TabButton/TapButton";
const App = () => {
  const [selectedContent, setSelectedContent] = useState("components")
  const handleSelecOption = (selectedOption) => {
setSelectedContent(selectedOption)
  }
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelecOption("components")}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelecOption("jsx")}>
              JSX
            </TapButton>
            <TapButton onSelect={() => handleSelecOption("state")}>
              State
            </TapButton>
            <TapButton onSelect={() => handleSelecOption("props")}>
              Props
            </TapButton>
          </menu>
          <div id="tab-content">
            <h3>{renderedData[selectedContent].title}</h3>
            <p>{renderedData[selectedContent].description}</p>
            <pre>
              <code>
                {renderedData[selectedContent].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
