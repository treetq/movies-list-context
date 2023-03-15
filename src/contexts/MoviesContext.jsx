import { createContext } from "react";
import { useState, useEffect, useCallback } from "react";

export const MoviesContext = createContext({
  movies: [{ name: "", poster: "" }],
  addMovies: () => {},
});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      {
        name: "Cocaine Bear",
        poster:
          "https://img.yts.mx/assets/images/movies/cocaine_bear_2023/medium-cover.jpg",
      },
      {
        name: "A Man Called Otto",
        poster:
          "https://img.yts.mx/assets/images/movies/a_man_called_otto_2022/medium-cover.jpg",
      },
      {
        name: "The Nomad",
        poster:
          "https://img.yts.mx/assets/images/movies/the_nomad_2023/medium-cover.jpg",
      },
    ]);
  }, []);

  const addMovies = useCallback((movie) => {
    setMovies((old) => {
      const mvs = [...old];
      mvs.push(movie);
      return mvs;
    });
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, addMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const MoviesConsumer = MoviesContext.Consumer;
