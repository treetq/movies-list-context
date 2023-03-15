import { useState } from "react";
import useMovies from "../hooks/useMovies";

const AddMovie = (props) => {
  const moviesContext = useMovies();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");

  return (
    <div className={props.className}>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Movie name"
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={poster}
          placeholder="Movie url"
          onChange={(e) => setPoster(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            moviesContext.addMovies({ name, poster });
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
