import { useOutletContext, useNavigate } from "react-router-dom";
import "./../Styles/Home.css";

const MovieList = () => {
  const { data } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>All Movies</h2>
      <div className="cardCointainer">
        {data.map((movie) => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;