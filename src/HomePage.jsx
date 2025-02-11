import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import Movies from "./Movies.json";

function Home() {
  const [movies, setMovies] = useState(Movies);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (title, rating) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, newMovie];
      setFilteredMovies(updatedMovies);
      return updatedMovies;
    });
  };

  return (
    <div className=" m-4 text-center ">
      <h1 className="text-6xl font-semibold m-7">My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovie onAddMovie={handleAddMovie} />
    </div>
  );
}

export default Home;
