

function MovieCard({ movie }) {
  return (
    <div className="flex  flex-col border border-black shadow-lg p-4 m-3 gap-3  ">
      <img className="w-[500px] h-[600px]" src={movie.posterURL} alt={movie.title} />
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p className="font-thin">{movie.description}</p>
      <p className="text-lg font-semibold">Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
