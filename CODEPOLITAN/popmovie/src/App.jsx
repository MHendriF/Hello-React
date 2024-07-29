import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import BoxMovies from "./components/BoxMovies";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import { API_KEY, tempWatchedData } from "./constants/data";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [query, setQuery] = useState("oppenheimer");
  const [selectedId, setSelectedId] = useState(null);

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setIsError("");
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        console.log("🚀 ~ fetchMovies ~ d:", data);

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search);
      } catch (e) {
        console.error(e);
        setIsError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setIsError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <BoxMovies>
          {isLoading && <Loader />}
          {!isLoading && !isError && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {isError && <ErrorMessage message={isError} />}
        </BoxMovies>
        <BoxMovies>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} onDeleteWatched={handleDeleteWatchedMovie} />{" "}
            </>
          )}
        </BoxMovies>
        {/* <BoxMovies>
          <MovieList movies={movies} />
        </BoxMovies>
        <BoxMovies>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </BoxMovies> */}
      </Main>
    </>
  );
}

export default App;

