import { useState } from "react";
import "./App.css";
import { MoviesProvider } from "./contexts/MoviesContext";
import ListMovies from "./views/ListMovies";
import AddMovie from "./views/AddMovie";

function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <main>
          <h1>Movie List</h1>
          <AddMovie className="myinputs" />
          <ListMovies className="grid" />
        </main>
      </div>
    </MoviesProvider>
  );
}

export default App;
