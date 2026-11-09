import { useEffect, useState } from 'react';
import { Routes, Route, useParams, Link, useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard.jsx';

// --- 1. Home Page ---
function Home({ query, setQuery }) {
  const [allMovies, setAllMovies] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('/api/Movies')
      .then((res) => res.json())
      .then((data) => { setAllMovies(data); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, []);

  const filtered = allMovies.filter((m) =>
    m.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <p id="results-count">
        {status === 'loading' ? 'Loading…' : `Showing ${filtered.length} movie(s)`}
      </p>
      <ul className="cards">
        {filtered.map((movie) => (
          <Link to={`/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
             <MovieCard movie={movie} />
          </Link>
        ))}
      </ul>
    </>
  );
}

// --- 2. Details Page ---
function MovieDetails() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch(`/api/Movies/${id}`) 
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => { setMovie(data); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, [id]);

  if (status === 'loading') return <p style={{ padding: '20px' }}>Loading...</p>;
  if (status === 'error') return <p style={{ padding: '20px' }}>Movie not found!</p>;

  return (
    <div className="single-movie-view">
      <Link to="/" className="back-link">← Back to all movies</Link>
      <ul className="cards">
        <MovieCard movie={movie} />
      </ul>
    </div>
  );
}

// --- 3. Main App ---
export default function App() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">Moviepedia</Link>
        
        <nav className="nav">
          <Link to="/">Home</Link>
        </nav>

        {/* The Search bar is now global! */}
        <div className="field">
          <input
            type="search"
            placeholder="Search movies..."
            value={query}
            onChange={handleSearch}
          />
        </div>
      </header>

      <section id="movies">
        <Routes>
          <Route path="/" element={<Home query={query} setQuery={setQuery} />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </section>
    </>
  );
}
