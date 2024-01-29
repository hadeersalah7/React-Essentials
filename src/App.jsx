import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import componentsImg from "./assets/components.png"
import jsxImg from "./assets/jsx-ui.png"
import stateImg from "./assets/state-mgmt.png"
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts img={componentsImg} alt="componentsImgInfo" description="Resuability can be used in React in a form of components" title="Components Info"/>
            <CoreConcepts img={jsxImg} alt="jsxImage"
              description="React is written in JSX syntax which stands for JavaScript Syntax" title="React Format"/>
            <CoreConcepts img={stateImg} alt="stateMangementImg"
              description="State Mangement In React components makes transfering the props & info much easier" title="State Mangement" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
