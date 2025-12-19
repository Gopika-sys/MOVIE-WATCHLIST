import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./../Styles/Home.css";

const Home = () => {
  const { data } = useOutletContext();
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const trendingData = data.filter((item) => item.popular === true);
    setTrending(trendingData);
  }, [data]);

  const categories = ["Action", "Comedy", "Drama", "Thriller"];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Unlimited Movies, One Platform</h1>
          <p>Watch trending, popular and latest movies anytime</p>
          <button onClick={() => navigate("/movie")}>
            Explore Movies
          </button>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We provide a wide collection of movies from classics to latest releases.
        </p>
      </section>

      <section className="categories">
        <h2>Movie Categories</h2>
        <div className="category-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => navigate(`/genres/${category}`)}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="trending">
        <h2>Trending Movies</h2>
        <div className="cardCointainer">
          {trending.map((movie) => (
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
      </section>
    </div>
  );
};

export default Home;