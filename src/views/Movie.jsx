const Movie = (props) => {
  return (
    <div className={props.className}>
      <img src={props.url} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default Movie;
