import { useState } from "react";

export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  return (
    <div className="tab-content">
      <h4>{item.title}</h4>
      {showDetails && <p>{item.body}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>{showDetails ? "Sembunyikan" : "Tampilkan"} Isi</button>

        <div className="hearts-counter">
          <span>{likes} 👍</span>
          <button onClick={handleInc}>+1</button>
          <button>+3</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Batal</button>
        <button>Batal dalam 2d</button>
      </div>
    </div>
  );
}
