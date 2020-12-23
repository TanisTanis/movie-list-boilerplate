import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      active: false
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  searchMovies(title) {
    title = title.toLowerCase();

    let matches = [];

    this.state.movies.forEach(movie => {
      let movieName = movie.title.toLowerCase();
      if (movieName.indexOf(title) !== -1) {
        matches.push(movie);
      }
    });

    if (matches.length === 0) {
      this.setState({
        active: true,
        movies: []
      });
    } else {
      this.setState({
        movies: matches,
        active: false
      });
    }
  }

  addMovie(title) {
    let newMovie = {title: title};
    let movieList = this.state.movies;
    movieList.push(newMovie);
    this.setState({
      movies: movieList
    });
  }

  render() {
    return(
      <div>
        <header className="main-head">
          <h1 className="main-header">The Offical Movie List of 2021 No Takebacks</h1>
          <h4 className="sub-header">The best movies to see on the TV in the living room!</h4>
        </header>
        <AddMovieBar addMovie={this.addMovie}/>
        <div className="seperator"></div>
        <SearchBar searchMovies={this.searchMovies}/>
        { this.state.active ? <div className="no-match">No movies matched your search...</div> : null }
        <div>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

export default App;