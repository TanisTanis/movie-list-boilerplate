import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      this.props.movies.map((movie, index) => (
        <MovieListItem movie={movie} key={movie + index} switchWatched={this.props.switchWatched}/>
      ))
    )
  }
}

export default MovieList;