import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSearch(event) {
    this.props.searchMovies(this.state.title);
  }


  render() {
    return(
      <div className="search-bar-div">
        <input type="text" placeholder="Search for a movie!" onChange={this.handleChange}></input>
        <button className="search-button button" onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}

export default SearchBar;