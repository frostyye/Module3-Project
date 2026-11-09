export default function MovieCard({ movie }) {
  return (
    <li className="movie-card">
      <img
        className="movie-poster"
        src={movie.image}
        alt={`${movie.name} Poster`}
      />
      <div className="movie-info">
        <h3>{movie.name}</h3>
        <p>{`${movie.genres.join(', ')} · ${movie.year} · ⭐ ${movie.rating}`}</p>
      </div>
    </li>
  );
}