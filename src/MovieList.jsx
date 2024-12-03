
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      {movies.map(movie => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
