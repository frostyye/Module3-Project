import { useEffect, useState } from 'react';
import MovieCard from './MovieCard.jsx';

export default function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    let cancelled = false;

    async function loadMovies() {
      try {
        const res = await fetch('/api/Movies');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setAllMovies(data);
          setStatus('ready');
        }
      } catch (err) {
        console.error('Failed to load movies:', err);
        if (!cancelled) setStatus('error');
      }
    }

    loadMovies();
    return () => { cancelled = true; };
  }, []);

  const filtered = allMovies.filter((m) =>
    m.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const resultsText =
    status === 'loading' ? 'Loading…'
    : status === 'error' ? 'Could not load movies.'
    : filtered.length === 0 ? 'No movies found.'
    : `Showing ${filtered.length} movie(s)`;

  return (
    <>
      <header className="header">
        <a href="#default" className="logo">Moviepedia</a>

        <nav className="nav">
          <a className="active" href="#home">Home</a>
          <a href="#watchlist">Watchlist</a>
          <a href="#movies">Movies</a>
        </nav>

        <div className="field">
          <input
            id="search"
            type="search"
            placeholder="e.g., The Godfather"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <section id="movies">
        <p id="results-count" role="status">{resultsText}</p>
        <ul id="movies-grid" className="cards">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <p>CSC 3050 * Javon and Elian's project</p>
      </footer>
    </>
  );
}