import useMovies from "../hooks/useMovies";
import Movie from "./Movie";
import AddMovie from "./AddMovie";

const ListMovies = (props) => {
  const moviesContext = useMovies();

  console.log(moviesContext.movies);
  return (
    <div className={props.className}>
      {moviesContext.movies.map((value, index) => {
        return (
          <div key={index}>
            <Movie className="movie" name={value.name} url={value.poster} />
          </div>
        );
      })}
    </div>
  );
};

export default ListMovies;
