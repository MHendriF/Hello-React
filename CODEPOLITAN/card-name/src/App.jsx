import "./App.css";
import Biodata from "./components/Biodata";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import Identity from "./components/Identity";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

export default App;

