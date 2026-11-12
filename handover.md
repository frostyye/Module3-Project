Moviepedia is meant to be a kind of a database of movies; it lets users search for movies and click on a movie for more details.
Some current features:
Movie browsing: Users on the homepage are shown 10 movies in a grid and it shows poster, title, genre, release year, and the movies rating
 Movie search: Users are allowed to search for movies by title in the search bar its reactive
Movie details: if you click on a movie grid it moves to the movies own dedicated web page.
 Random movie generator: whenever a user clicks the random button it just randomly selects an id and displays its page
  To run the program you need to npm install on server and on client folders and then replace the src files that were created with our files on github. Following the module 3 guide provided by Dr. ricky will help you clarify any questions you may have about the process. 
Files and what they do:
  App.jsx: it talks to the api, it has the search, and routes
  Main.jsx: connects react and the css
  MovieCard.jsx: displays the movies info in cards
  Style.css: the website’s css
  Index.html: html doc
  vite.config.js: configures vite and uses express for the api
  server.js: has the movie data and api routes
Important decisions:
  We added a random movie function to spice up the experience and also to make sure our ids work as they are supposed to when they are called.
  We added a search bar to have the user be able to search by name and by ID just to give them more options.

Backend functionality
  The backend currently has the data of 10 movies. It has two GET endpoints:
    GET /api/Movies: Returns the entire movie collection.
    GET /api/Movies/:id: Returns an individual movie based on its ID.
  The backend runs on port 3001, while the React frontend runs on port 5173.

Current project status
  Core functionality implemented
  The application currently has:
  A functioning React frontend.
  A backend providing movie data.
  Frontend-to-backend communication through a Vite.
  Movie searching and filtering.
  Individual movie details.
  Random movies.
  movie card layouts.

Some goals we have:
  Adding a movie watchlist for users
  Allowing users to edit the movie data
  More movie details when you click on the movie itself
  Links or trailers in the movie details
  There also might be some legacy code in the css file that may be outdated
