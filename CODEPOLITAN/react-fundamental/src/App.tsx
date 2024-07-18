import "./App.css";
import { GlobalContext } from "./context";
import HomePage from "./pages/Index";

function App() {
  const user = {
    username: "HendriF",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <HomePage />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

