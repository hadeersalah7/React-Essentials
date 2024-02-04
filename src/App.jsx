import Header from "./components/Header/Header";
import Examples from "./components/Examples/Examples";
import MainCoreConcepts from "./components/MainCoreConcepts/MainCoreConcepts";
const App = () => {

  return (
    <div>
      <Header />
      <main>
        <MainCoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
