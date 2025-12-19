import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./../Styles/Home.css";

const Genres = () => {
  const { data } = useOutletContext();
  const navigate = useNavigate();

  const categories = ["Action", "Comedy", "Drama", "Thriller", "Sci-Fi", "Adventure", "Animation", "Crime", "Romance", "Fantasy", "Family"];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredMovies = selectedCategory
    ? data.filter((movie) => movie.genre.includes(selectedCategory))
    : data; 

  return (
    <div className="home">
      <h2>Genres</h2>

      <div className="category-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-card ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}

        <button onClick={() => setSelectedCategory(null)}>All</button>
      </div>

      <div className="cardCointainer">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="card"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>No movies found in {selectedCategory}</p>
        )}
      </div>
    </div>
  );
};

export default Genres;