import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const MovieDescriptionPage = ({ movies }) => {
  const { id } = useParams();
  const history = useHistory();

  // Find the movie based on the ID from the URL
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title} ({movie.year})</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  );
};
