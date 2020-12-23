import React from 'react';

class AddMovieBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    let change = event.target.value;
    this.setState({
      title: change
    });
  }

  handleClick(event) {
    this.props.addMovie(this.state.title);
    this.setState({
      title: ''
    });
  }


  render() {
    return(
      <div className="add-movie-div">
        <input type="text" placeholder="Add Movies To The List!" onChange={this.handleChange}></input>
        <button className="add-movie-button button" onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default AddMovieBar;