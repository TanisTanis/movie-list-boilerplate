import React from 'react';

let MovieListItem = (props) => (
  <div className="movie-title-div">
    <span className="movie-title">{props.movie.title}</span>
  </div>
)

export default MovieListItem;