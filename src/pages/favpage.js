import MovieList from "../components/MovieList";

function FavMovie(favourites, removeFavouriteMovie, RemoveFavourites) {
  
  return (
    <div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default FavMovie;