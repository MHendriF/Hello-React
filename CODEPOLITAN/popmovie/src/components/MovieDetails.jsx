import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { API_KEY } from "../constants/data";

export default function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isWatched = watched.some((movie) => movie.imdbID === selectedId);
  const userRatingWatched = watched.find((movie) => movie.imdbID === selectedId)?.userRating;

  const {
    Title: Title,
    Year: Year,
    Released: released,
    Poster: Poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Actors: actors,
    Director: director,
  } = movie;

  function handleAddWatched() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: Number(userRating),
    };
    console.log("🚀 ~ handleAddWatched ~ newWatchedMovie:", newWatchedMovie);
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`);
      const data = await response.json();
      console.log("🚀 ~ getMovieDetails ~ data:", data);
      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!Title) return;
    document.Title = `PopMovie | ${Title}`;

    return function () {
      document.Title = "PopMovie";
      console.log(`clean up movie details ${Title}`);
    };
  }, [Title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &#x2715;
            </button>
            <img src={Poster} alt={`${Title} Poster`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                <span>📅</span>
                <span>{released}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{runtime}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{imdbRating}</span>
              </p>
            </div>
          </header>
          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Genre: {genre}</p>
            <p>Starring: {actors}</p>
            <p>Directed by: {director}</p>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating max={10} size={24} color="#fcc419" onSetRating={setUserRating} />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddWatched}>
                      + Add to Watched
                    </button>
                  )}
                </>
              ) : (
                <p>you have watched this movie with a rating of {userRatingWatched} / 10</p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
