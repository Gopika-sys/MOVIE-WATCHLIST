import { useParams, useOutletContext } from "react-router-dom";
import "../Styles/Movie.css";


const Movie = () => {
  const { movId } = useParams();
  const { data } = useOutletContext();

  const movie = data.find(item => item.id === Number(movId));

  if (!movie) {
    return <h2 className="movie-not-found">Movie Not Found</h2>;
  }

  return (
    <div className="movie-page">
      <div className="movie-card">
        <h1 className="movie-title">{movie.title}</h1>
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-poster"
        />
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default Movie;