Network Request Analysis:
When the user navigates to a specific movie by clicking a card, the frontend triggers a GET request to /api/Movies/id. Due to the Vite proxy configuration, the browser routes this request to the backend. 

Request Headers:
The request included JSON from the backend. Because this request had been made earlier in this session, the browser automatically included cache validation headers.

Response:
The Backend server matches the dynamic ID, finds the corresponding movie within the local array, and returns an HTTP status of 304. This tells the browser to use its local cached version of the JSON.

Resulting state change:
Resulting state change: 304 instead of a 200; the fetch api in the movieDetail component still resolved successfully. It parsed the cached JSON payload while React processed this state update and re-rendered the UI asynchronously, replacing the "Loading..." state with the MovieCard for "Police Story 2." This demonstrates how HTTP caching speeds up asynchronous UI updates.
