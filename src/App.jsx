import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Examples from "./components/Example/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
