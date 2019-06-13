import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    // fill me in with an HTTP Request to `localhost:5000/api/movies`
    
      axios
      .get(`http://localhost:5000/api/movies`)
      .then(res => {
        this.setState({
          movies: res.data,
        });
      });
    };

  deleteMovie = (id) => {
      axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          movies: res.data,
        })
      });
  }
  
  

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} deleteMovie={this.deleteMovie}/>
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, deleteMovie }) {
  return (
      <MovieCard movie={movie} deleteMovie={deleteMovie}/>
  );
}
