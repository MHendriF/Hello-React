import MovieItem from "./MovieItem";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie, index) => (
        <MovieItem key={index} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
