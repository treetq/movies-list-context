import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

const useMovies = () => useContext(MoviesContext);

export default useMovies;
