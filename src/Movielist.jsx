import { useEffect, useState } from "react";

export default function Movieslist() {
  const [status, setStatus] = useState("loading");   // "loading", "error", or "success"
  const [quotes, setquotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/movies");

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        setquotes(data);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    }

    load();
  }, []);                                              // [] means: run once, when the component first appears

  if (status === "loading") return <p role="status">Loading…</p>;
  if (status === "error") return <p role="alert">Could not load movies. {error}</p>;

  return (
    <ul>
      {movies.map(i => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
}
