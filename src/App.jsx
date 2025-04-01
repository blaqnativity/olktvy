import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie";
import { useState } from "react";
import movieData from "../src/movies";

const App = () => {
  const [movies, setMovies] = useState(movieData);
  const [filter, setFilter] = useState({ title: "", rating: 0 });

  // Adding new movie logic
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Filtering movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <>
      <Navbar />
      <Filter filter={filter} setFilter={setFilter} />
      <AddMovie
        newMovie={newMovie}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <MovieList movies={filteredMovies} />
      <Footer />
    </>
  );
};

export default App;
