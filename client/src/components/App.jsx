import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
      searchActive: false,
      watchedActive: false,
      unwatchedActive: false
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.switchWatched = this.switchWatched.bind(this);
    this.filterByWatched = this.filterByWatched.bind(this);
    this.filterByUnwatched = this.filterByUnwatched.bind(this);
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
    let newMovie = {title: title, watched: false};
    let movieList = this.state.movies;
    movieList.push(newMovie);
    this.setState({
      movies: movieList
    });
  }

  switchWatched(title) {
    title = title.toLowerCase();
    this.state.movies.forEach(movie => {
      if (movie.title.toLowerCase() === title) {
        movie.watched = !movie.watched
        console.log(movie);
      }
    });
  }

  filterByWatched() {
    let watchedMovies = this.state.movies.filter(movie => movie.watched === true);
    if (watchedMovies.length === 0) {
      this.setState({
        watchedActive: true,
        unwatchedActive: false
      });
    } else {
      this.setState({
        unwatchedActive: false,
        watchedActive: false,
        movies: watchedMovies
      });
    }
  }

  filterByUnwatched() {
    let unwatchedMovies = this.state.movies.filter(movie => movie.watched === false);
    if (unwatchedMovies.length === 0) {
      this.setState({
        unwatchedActive: true,
        watchedActive: false
      });
    } else {
      this.setState({
        watchedActive: false,
        unwatchedActive: false,
        movies: unwatchedMovies
      });
    }
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
        { this.state.searchActive ? <div className="no-match">No movies matched your search...</div> : null }
        <div className="filter-buttons">
          <button className="watch-button filter" onClick={this.filterByWatched}>Watched</button>
          <button className="to-watch-button filter" onClick={this.filterByUnwatched}>To Watch</button>
        </div>
        {this.state.watchedActive ? <div className="no-match">No movies in watched list...</div> : null}
        {this.state.unwatchedActive ? <div className="no-match">No movies in unwatched list...</div> : null}
        <div>
          <MovieList movies={this.state.movies} switchWatched={this.switchWatched}/>
        </div>
      </div>
    )
  }
}

export default App;