import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "4a1bcea6"; // Replace with your OMDb API key

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-400 hover:underline">← Back to Search</Link>

      {movie && (
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
            alt={movie.Title}
            className="w-72 rounded shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h1>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
