import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "4a1bcea6"; // Replace with your OMDb API key

  const fetchMovies = async () => {
    if (!search.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      );
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
        setError(res.data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movies.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold">🎬 Movie Search App</h1>
      <SearchBar search={search} setSearch={setSearch} onSearch={fetchMovies} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-400 mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
