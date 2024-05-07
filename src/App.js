import Randomgif from "./components/Randomgif";
import Searchedgif from "./components/Searchedgif";

function App() {
  return (
    <div className="App">
      <div className="bg-full">
        <h1>Random Gif generator</h1>
        <Randomgif/>
        <h1>Searched Random Gif</h1>
        <Searchedgif/>
      </div>
    </div>
  );
}

export default App;
