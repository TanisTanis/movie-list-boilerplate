import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false,
      info: false
    }

    this.handleWatchClick = this.handleWatchClick.bind(this);
    this.handleMovieNameClick = this.handleMovieNameClick.bind(this);
  }

  handleWatchClick(event) {
    this.setState({
      watched: !this.state.watched
    });
    this.props.switchWatched(event.target.name);
  }

  handleMovieNameClick(event) {
    this.setState({
      info: !this.state.info
    });
  }

  render() {
    let className = this.state.watched ? "watched-movie watch" : "unwatched-movie watch"
    return (
      <div className="movie-title-div">
        <span className="movie-title" onClick={this.handleMovieNameClick}>{this.props.movie.title}</span>
        {this.state.info ? <div className="movie-info">
          <div className="info year">Year: {this.props.movie.year}</div>
          <div className="info runtime">Runtime: {this.props.movie.runtime}</div>
          <div className="info metascore">Metascore: {this.props.movie.metascore}</div>
          <div className="info imdb">Imdb Rating: {this.props.movie['imdb Rating']}</div>
          {!this.state.watched ? <button onClick={this.handleWatchClick} className={className} name={this.props.movie.title}>To watch</button> : null}
          {this.state.watched ? <button onClick={this.handleWatchClick} className={className} name={this.props.movie.title}>Watched</button> : null}
        </div> : null}
      </div>
    )
  }
}

export default MovieListItem;