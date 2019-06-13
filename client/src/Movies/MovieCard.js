import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  console.log(props.deleteMovie);
  return (
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
      {props.deleteMovie && <button onClick={() => {props.deleteMovie(props.movie.id)}}>Delete Movie</button>}
    </div>
  );
};

export default MovieCard;
