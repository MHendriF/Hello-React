import { useState } from "react";

export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleLikes() {
    handleInc();
    handleInc();
    setLikes((likes) => {
      const lastLike = likes + 1;
      console.log("🚀 ~ setLikes ~ lastLike:", lastLike);
      return lastLike;
    });
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log("🚀 ~ TabContent ~ showDetails:", showDetails);
    console.log("🚀 ~ TabContent ~ likes:", likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
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
          <button onClick={handleLikes}>+3</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Batal</button>
        <button onClick={handleUndoLater}>Batal dalam 2s</button>
      </div>
    </div>
  );
}
