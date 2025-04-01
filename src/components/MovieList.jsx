import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="max-w-7xl my-20 mx-auto px-6">
      {/* Grid container should wrap all movie cards, not each one individually */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.length > 0 ? ( // ✅ Check if there are movies to display
          movies.map((movie) => <MovieCard key={movie.title} {...movie} />)
        ) : (
          <p className="text-center font-bold col-span-3 text-red-500">
            Welcome to the aisle of great nothingness!!!
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
