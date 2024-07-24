import WatchedItem from "./WatchedItem";

export default function WatchedList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie, index) => (
        <WatchedItem key={index} movie={movie} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
