import React, { useState, useEffect } from "react";
import "../navbar/Nav.css";

function Nav() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=edb780ff`
      );
      const data = await response.json();
      const movieImages = await data.Search.map((movie) => movie.Poster);
      setMovies(movieImages);
    };

    if (searchValue !== "") {
      fetchMovies();
    }
  }, [searchValue]);

  return (
    <div>
      <div className="navigation-bar">
        <span className="logo">Tuner</span>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <div className="user-links">
          <span>
            <a href="#" className="login">
              {" "}
              Login{" "}
            </a>
            <span id="line"> | </span>
            <a href="#" className="register">
              Register
            </a>
          </span>
        </div>
      </div>
      {movies.length > 0 && (
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div key={index} className="movie-container">
              <img src={movie} alt="" />
              <p className="movie-title">{searchValue}</p>
             <span className="play">
                <img
                  src="https://silicondales.com/wp-content/uploads/2019/03/video-play-icon.jpg"
                  alt="play"
                />
              </span>
              <div className="Movie-details">
                <span className="date">12 jan 2023</span>
                <span className="length"> 14 Mins</span>
                <span className="views"> 200 Views</span>
                <span className="profile">
                  <img
                    src="https://i.pinimg.com/474x/be/e7/71/bee771ceb7c25e8006acb322e284d2f6--sunsets-sky.jpg"
                    alt="profile pic"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Nav;
