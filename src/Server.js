import express from "express";

const app = express();
app.use(express.json());

const Movies = [
   { id: 1,  name: "Resident Evil 2026",             image: "https://image.tmdb.org/t/p/original/i7UyjfPio0VFHB9rBUZSFyhOoM8.jpg",       genres: ["Horror", "Science Fiction", "Adventure"], year: 2026, rating: "7.3/10" },
  { id: 2,  name: "Obsesion",                       image: "https://image.tmdb.org/t/p/w1280/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",            genres: ["Horror", "Thriller"],                      year: 2023, rating: "8.2/10" },
  { id: 3,  name: "Police Story 2",                 image: "https://image.tmdb.org/t/p/w1280/cZKuFo3nQbyRqGZtVmx3WsitJRB.jpg",      genres: ["Thriller", "Action", "Crime"],             year: 1988, rating: "7.0/10" },
  { id: 4,  name: "Thor",                           image: "https://image.tmdb.org/t/p/w1280/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",                genres: ["Action", "Thriller", "Fantasy"],            year: 2011, rating: "6.8/10" },
  { id: 5,  name: "Wild Child",                     image: "https://image.tmdb.org/t/p/w1280/xwbFEPubG4wroLDZdmTWRGNnnWf.jpg",          genres: ["Comedy", "Family"],                        year: 2008, rating: "6.8/10" },
  { id: 6,  name: "Mr. Woodcock",                   image: "https://image.tmdb.org/t/p/w1280/wWQC7Zc4I4RKjiOb8L1GVvqkrlA.jpg",         genres: ["Comedy", "Romance"],                       year: 2007, rating: "5.1/10" },
  { id: 7,  name: "Scary Movie 2",                  image: "https://image.tmdb.org/t/p/w1280/7Eb1JWK0Cb0rbfsYjwfc9g0PbQH.jpg",       genres: ["Comedy", "Horror"],                        year: 2001, rating: "5.9/10" },
  { id: 8,  name: "Transcendence",                  image: "https://image.tmdb.org/t/p/w1280/i3JqPtiJWnidaif3UA2K2Eng0hp.jpg",       genres: ["Thriller", "Science Fiction"],             year: 2014, rating: "6.1/10" },
  { id: 9,  name: "Goosebumps 2: Haunted Halloween",image: "https://image.tmdb.org/t/p/w1280/t2wy38iiMpB8WsgJi3lYeDnGh2H.jpg",        genres: ["Comedy", "Horror"],                        year: 2018, rating: "6.1/10" },
  { id: 10, name: "Pineapple Express",              image: "https://image.tmdb.org/t/p/w1280/6E50WjeOYjDZg9HXgPjYdGtY2jG.jpg",   genres: ["Action", "Crime"],                         year: 2008, rating: "6.6/10" }
];

app.get("/api/Movies", (req, res) => {
  res.status(200).json(Movies);
});

app.get("/api/Movies/:id", (req, res) => {
  const movie = Movies.find(i => i.id === Number(req.params.id));  // ← renamed

  if (!movie) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `No Movies with id ${req.params.id}`,
      },
    });
  }

  res.status(200).json(movie);
});

app.listen(3001, () => {
  console.log("API running at http://localhost:3001");
});