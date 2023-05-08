import React from "react";
// import { Router, Link } from "react-router-dom";

// import Card from 'react-bootstrap/Card'

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        // <Router>
        //   <Link to={`/movie/${movie.imdbID}`}>
        <div>
          <img src={movie.Poster} alt="movie"></img>
          <div onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </div>
        </div>
        //   </Link>
        // </Router>
      ))}
    </>
  );
};

export default MovieList;
