import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-3 hover:scale-105 transition-transform">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        className="w-full h-72 object-cover rounded"
      />
      <h2 className="mt-2 font-bold text-lg">{movie.Title}</h2>
      <p className="text-sm text-gray-400">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="inline-block mt-2 text-blue-400 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}

export default MovieCard;
