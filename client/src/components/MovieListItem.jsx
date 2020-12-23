import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      watched: !this.state.watched
    });
    this.props.switchWatched(event.target.name);
  }

  render() {
    let className = this.state.watched ? "watched-movie watch" : "unwatched-movie watch"
    return (
      <div className="movie-title-div">
        <span className="movie-title">{this.props.movie.title}</span>
        {!this.state.watched ? <button onClick={this.handleClick} className={className} name={this.props.movie.title}>To watch</button> : null}
        {this.state.watched ? <button onClick={this.handleClick} className={className} name={this.props.movie.title}>Watched</button> : null}
      </div>
    )
  }
}

export default MovieListItem;