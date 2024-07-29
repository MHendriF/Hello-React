import { useState } from "react";
import { dataContent } from "./constants/data";
import Tabbed from "./components/Tabbed";

function App() {
  const [content, setContent] = useState(dataContent);

  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

export default App;

