import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var movies = [
  {title: 'Mean Girls', year: '1997', runtime: '109 minutes', metascore: '102', 'imdb Rating': 9.5},
];


ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));