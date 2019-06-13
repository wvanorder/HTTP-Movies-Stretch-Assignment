import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import AddForm from './Movies/AddForm';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      savedList: [],
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: '',
      newMovie: {},
    }
  }


  addToSavedList = (movie) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({savedList});
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addMovie = e => {
    console.log(this.props.history);
    e.preventDefault();
    const newMoviez= {
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: this.state.stars.split(','),
    };

    axios
    .post('http://localhost:5000/api/movies', newMoviez)
    .then(res => {
      this.setState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: '',
      });
      this.props.history.push('/');
    })
    .catch(err => console.log('Error', err))
    
  };

  render(){
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={ (props) => {
          return(<Movie {...props} addToSavedList={this.addToSavedList}/>)
        }} />
        <Route path="/add" render={(props) => {
          return(<AddForm {...props} 
            changeHandler={this.changeHandler}
            addMovie={this.addMovie} 
            newMovie={this.state.newMovie}
            id={this.state.id}
            title={this.state.title}
            director={this.state.director}
            metascore={this.state.metascore}
            stars={this.state.stars}
            newMovie={this.state.newMovie}
            />)
        }} />
      </div>
    )
  }
};

export default withRouter(App);
